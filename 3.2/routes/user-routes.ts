import express = require("express");
import { Router, Request, Response } from "express";
import { createBooksPage } from "../controllers/books-page";
import { createBookPage } from "../controllers/book-page";
import { increaseWants } from "../controllers/library";

export const userRouter: Router = express.Router();

userRouter.use(express.urlencoded());
userRouter.use(express.json());

userRouter.get("/", createBooksPage);

userRouter.get("/book/:id", createBookPage);

userRouter.post("/api/v1/", increaseWants);
