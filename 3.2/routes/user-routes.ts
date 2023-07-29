import express = require("express");
import { Router, Request, Response } from "express";
import { createBooksPage } from "../controllers/books-page";
import { createBookPage } from "../controllers/book-page";
import { increaseWants } from "../controllers/library";

export const userRouter: Router = express.Router();

userRouter.use(express.urlencoded());
userRouter.use(express.json());

userRouter.get(
  "/",
  async (req: Request, res: Response) => await createBooksPage(req, res)
);

userRouter.get(
  "/book/:id",
  async (req: Request, res: Response) => await createBookPage(req, res)
);

userRouter.post("/api/v1/", async (req: Request, res: Response) => {
  await increaseWants(req, res);
});
