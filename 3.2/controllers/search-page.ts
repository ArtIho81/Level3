import { Request, Response } from "express";
import { getSearchBooks } from "./search";
import fs = require("fs");
import path = require("path");
import { BookInfo } from "./library";

const filePath = path.join(__dirname, "../templates/search-page-template.html");

const booksPerPage: number = 3;
const bookTemplate: string = `<div data-book-id="%book-id%" class="book_item col-xs-6 col-sm-3 col-md-2 col-lg-2">
  <div class="book">
    <a href="/book/%book-id%"><img src=".././img/%book-id%.jpg" alt="%book-title%">
      <div data-title="%book-title%" class="blockI" style="height: 46px;">
        <div data-book-title="%book-title%" class="title size_text">%book-title%</div>
        <div data-book-author="%book-author%" class="author">%book-author%</div>
      </div>
    </a>
    <a href="/book/%book-id%">
      <button type="button" class="details btn btn-success">Читать</button>
    </a>
  </div>
</div>`;

export async function createSearchPage(req: Request, res: Response) {
  if (req.query.title && typeof req.query.title === "string") {
    const title = req.query.title.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const books: string = await createSearchContent(title);
    fs.readFile(filePath, "utf8", (err, template) => {
      if (err) {
        console.log("Error reading file books-page-template.html");
        return res.send("Something wrong");
      }
      const filledTemplate: string = template.replace(
        /<div>%books%<\/div>/g,
        books
      )
      .replace('%search%', `${title}`)
      //.replace(/<div>%pagination buttons%<\/div>/g, buttons);

      res.send(filledTemplate);
    })
  };
}

async function createSearchContent(title: string): Promise<string> {
  const books: BookInfo[] = await getSearchBooks(title);
  if (books) {
    return books.reduce((acc, book) => {
      acc += bookTemplate
        .replace(/%book-id%/g, `${book.id}`)
        .replace(/%book-title%/g, book.title)
        .replace(/%book-author%/g, book.author);
      return acc;
    }, "");
  }
  return "Nothing found";
}
