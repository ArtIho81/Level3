import express = require("express");
import { Router, Request, Response } from "express";
import path = require("path");
import multer = require("multer");
import { deleteSchedule } from "../schedules";

import { createAdminPage } from "../controllers/admin-page";
import { addBookToLibrary, markDeletingBook } from "../controllers/library";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "public/img"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + ".jpg");
  },
});
const upload = multer({ storage });

export const adminRouter: Router = express.Router();
adminRouter.use(express.urlencoded());
adminRouter.use(express.json());

adminRouter.get(
  "/admin",
  async (req: Request, res: Response) => await createAdminPage(req, res)
);

adminRouter.post(
  "/admin/api/v1/add_book",
  upload.single("cover"),
  async (req: Request, res: Response) => await addBookToLibrary(req, res)
);

adminRouter.post(
  "/admin/api/v1/delete_book",
  async (req: Request, res: Response): Promise<void> => {
    const id: number | undefined = await markDeletingBook(req, res);
    if (id) {
      deleteSchedule(id);
    }
  }
);