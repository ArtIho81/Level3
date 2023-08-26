import { Request, Response } from "express";
import { getBooks, getLibraryLength, getSearchBooks } from "./library";
import { sendBadRequest, sendServerError } from "../services/responses";
import { getPageTemplate } from "../services/read-templates";
import { isValidNumber } from "../services/checks";

const booksPerPage: number = 6;
const offsetLimit: number = 20;
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

function getSearchValue(req: Request): string | undefined {
  const searchQuery = req.query.search?.valueOf();
  return (Array.isArray(searchQuery) ? searchQuery[0] : searchQuery)
    ?.replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function defineOffset(req: Request): number {
  const offset = req.query.offset ? +req.query.offset : 0;
  return offset >= offsetLimit ? offsetLimit : offset;
}

export async function createBooksPage(req: Request, res: Response) {
  const search = getSearchValue(req);
  const offset = search ? -1 : defineOffset(req);
  if (!search && !isValidNumber(offset, 0)) {
    return sendBadRequest(res);
  }
  const books = await createContent(offset, search);
  const libraryLength = await getLibraryLength();

  if (!books || !libraryLength) {
    return sendServerError(res);
  }
  const buttons = addPaginationButtons(offset, libraryLength);
  const searchResult = search ? `<h2>Результат поиска по ${search}</h2>` : "";

  const template = await getPageTemplate("../view/books-page-template.html");

  const content = template
    ?.replace(/<h2>%search%<\/h2>/g, searchResult)
    .replace(/<div>%books%<\/div>/g, books)
    .replace(/<div>%pagination buttons%<\/div>/g, buttons);

  content ? res.send(content) : sendServerError(res);
}

function addPaginationButtons(offset: number, libraryLength: number): string {
  let nextButton: string = "",
    prevButton: string = "";

  /* No buttons on search page */
  if (offset === -1) return "";

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

/* Returns HTML  */
async function createContent(
  offset: number,
  search: string | undefined
): Promise<string | undefined> {
  const books = search
    ? await getSearchBooks(search)
    : await getBooks(offset, booksPerPage);

  return books?.length === 0
    ? "Ничего не нашлось"
    : books?.reduce((acc, book) => {
        acc += bookTemplate
          .replace(/%book-id%/g, `${book.id}`)
          .replace(/%book-title%/g, book.title)
          .replace(/%book-author%/g, book.author);
        return acc;
      }, "");
}
