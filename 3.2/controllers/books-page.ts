import { Request, Response } from "express";
import { getBooks, getLibraryLength } from "./library";
import fs = require ("fs");
import path = require("path");

const filePath = path.join(__dirname, "../templates/books-page-template.html");

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

export async function createBooksPage(req: Request, res: Response) {
  let offset: number = req.query.offset ? +req.query.offset : 0;
  offset = offset >= 20 ? 20 : offset;
  const books = await createContent(offset);
  const libraryLength = await getLibraryLength();
  if (!books || !libraryLength) {
    return res.send("<h1>Something wrong</h1>")
  }
  const buttons: string = addPaginationButtons(offset, libraryLength);
  fs.readFile(filePath, "utf8", (err, template) => {
    if (err) {
      console.log("Error reading file books-page-template.html");
      return res.send("Something wrong");
    }
    const filledTemplate: string = template
      .replace(/<div>%books%<\/div>/g, books)
      .replace(/<div>%pagination buttons%<\/div>/g, buttons);

    res.send(filledTemplate);
  });
}

function addPaginationButtons(offset: number, libraryLength: number): string {
  let nextButton: string = "";
  let prevButton: string = "";

  if (offset > 0) {
    prevButton = `<a href="/?offset=${offset - 1}">
    <button id="prev">Назад</button>
    </a>`;
  }
  if ((offset + 1) * booksPerPage < libraryLength) {
    nextButton = `<a href="/?offset=${offset + 1}">
    <button id="next">Вперед</button>
    </a>`;
  }
  return `<center><div class="pagination-buttons">
    ${prevButton}
    ${nextButton}
    </div></center>`;
}

async function createContent(offset: number): Promise<string | undefined> {
  const books = await getBooks(offset, booksPerPage);
  if (books) {
    return books.reduce((acc, book) => {
      acc += bookTemplate
        .replace(/%book-id%/g, `${book.id}`)
        .replace(/%book-title%/g, book.title)
        .replace(/%book-author%/g, book.author);
      return acc;
    }, "");
  }
}