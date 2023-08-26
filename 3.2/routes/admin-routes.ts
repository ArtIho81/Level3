import express = require("express");
import { Router } from "express";
import path = require("path");
import multer = require("multer");
import { deleteSchedule } from "../services/schedules";

import { createAdminPage } from "../controllers/admin-page";
import {
  addBookToLibrary,
  markDeletingBook,
} from "../controllers/adminBooksActions";

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

adminRouter.get("/admin", createAdminPage);

adminRouter.post(
  "/admin/api/v1/add_book",
  upload.single("cover"),
  addBookToLibrary
);

adminRouter.post("/admin/api/v1/delete_book", markDeletingBook, deleteSchedule);
