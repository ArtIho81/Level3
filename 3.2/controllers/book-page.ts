import { Request, Response } from "express";
import { Book, getBook } from "./library";
import fs = require("fs");
import path = require("path");

const filePath = path.join(__dirname, "../templates/book-page-template.html");

export async function createBookPage(req: Request, res: Response) {
  if (!req.params.id) {
    return res.send("<h1>Something wrong</h1>");
  }
  const bookId: number = +req.params.id;
  const book = await getBook(bookId);
  if (!book) {
    return res.send("<h1>Something wrong</h1>");
  }
  fs.readFile(filePath, "utf8", (err, template) => {
    if (err) {
      console.log("Error reading file book-page-template.html");
      return res.send("<h1>Something wrong</h1>");
    }
    res.send(fillBookTemplate(template, book));
  });
}

function fillBookTemplate(template: string, book: Book) {
  return template
    .replace(/%book-id%/g, `${book.id}`)
    .replace(/%book-title%/g, book.title)
    .replace(/%book-author%/g, book.author);
}
