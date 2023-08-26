import schedule = require("node-schedule");
import mysqldump from "mysqldump";
import { dbConfig, Connect } from "../db/dbconfig";
import path = require("path");
import { Request, Response } from "express";
import { deleteBookFromLibrary } from "../controllers/adminBooksActions";
import fs = require("fs");

interface Dump {
  connection: Connect;
  dumpToFile: string;
}

/* The time interval between soft and final deleting, ms */
const softDeleteTime = 1 * 60 * 1000;

const dumpDeleteTime = 10 * 24 * 60 * 60 * 1000;

const dumpFolderPath = path.join(__dirname, "db/dump");

export function startSchedules() {
  const dumpOptions: Dump = {
    connection: dbConfig,
    dumpToFile: `${dumpFolderPath}/${new Date()
      .toLocaleDateString()
      .replace(/\./g, "_")}.sql`,
  };
  schedule.scheduleJob("30 3 * * *", async () => {
    try {
      await mysqldump(dumpOptions);
      console.log("Backup is successfully complete");
    } catch (err) {
      console.error("Backup error:", err);
    }
  });

  schedule.scheduleJob("50 15 * * *", () => {
    deleteOldDumps();
  });
}

export function deleteSchedule(req: Request, res: Response): void {
  const id = +req.body.id;
  const deleteTime: Date = new Date(new Date().getTime() + softDeleteTime);
  schedule.scheduleJob(deleteTime, () => {
    deleteBookFromLibrary(id).then(() =>
      console.log(`Book ${id} was deleted from db`)
    );
  });
}

async function deleteOldDumps(): Promise<void> {
  const currentTime = new Date().getTime();
  try {
    const files = await fs.promises.readdir(dumpFolderPath);
    for (const file of files) {
      const filePath = path.join(dumpFolderPath, file);
      const stats = await fs.promises.stat(filePath);
      const timeElapsed = currentTime - stats.birthtime.getTime();
      const isDumpToDelete = timeElapsed >= dumpDeleteTime;
      if (isDumpToDelete) {
        await fs.promises.unlink(filePath);
        console.log(`${file} is successfully deleted`);
      }
    }
  } catch (err) {
    console.error("Error:", err);
  }
}
