import { Request, Response } from "express";
import { getBook } from "./library";
import { Book } from "../model/types";
import { sendBadRequest, sendServerError } from "../services/responses";
import { getPageTemplate } from "../services/read-templates";
import { isValidNumber } from "../services/checks";

export async function createBookPage(req: Request, res: Response) {
  if (!req.params.id) {
    sendServerError(res);
    return;
  }
  const bookId: number = +req.params.id;
  if (!isValidNumber(bookId, 1)) {
    return sendBadRequest(res);
  }
  const book = await getBook(bookId);
  if (!book) {
    return sendServerError(res);
  }
  const template = await getPageTemplate("../view/book-page-template.html");
  const content = fillBookTemplate(template, book);
  content ? res.send(content) : sendServerError(res);
}

function fillBookTemplate(
  template: string | undefined,
  book: Book
): string | undefined {
  return template
    ?.replace(/%book-id%/g, `${book.id}`)
    .replace(/%book-title%/g, book.title)
    .replace(/%book-author%/g, book.author)
    .replace(/%book-pages%/g, `${book.pages}`)
    .replace(/%book-year%/g, `${book.year}`)
    .replace(/%book-description%/g, `${book.description}`);
}
