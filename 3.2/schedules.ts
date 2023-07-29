import schedule = require("node-schedule");
import mysqldump from "mysqldump";
import { dbConfig, Connection } from "./db/dbconfig";
import path = require("path");

import { deleteBookFromLibrary } from "./controllers/library";

interface Dump {
  connection: Connection;
  dumpToFile: string;
}

export function startSchedules() {
  const dumpOptions: Dump = {
    connection: dbConfig,
    dumpToFile: path.join(
      __dirname,
      `/db/dump/${new Date().toLocaleDateString().replace(".", "_")}.sql`
    ),
  };
  schedule.scheduleJob("0 3 * * *", async () => {
    try {
      await mysqldump(dumpOptions);
      console.log("Backup is successfully complete");
    } catch (err) {
      console.error("Backup error:", err);
    }
  });
}

export function deleteSchedule(id: number): void {
  const deleteTime: Date = new Date(new Date().getTime() + 1 * 60 * 1000);
  schedule.scheduleJob(deleteTime, () => {
    deleteBookFromLibrary(id).then(() =>
      console.log(`Book ${id} was deleted from db`)
    );
  });
}