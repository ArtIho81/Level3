import { Request, Response } from "express";
import { getBooks, getLibraryLength } from "./library";
import { isAdmin, isValidNumber } from "../services/checks";
import {
  sendBadRequest,
  sendBasicAuth,
  sendLogout,
  sendServerError,
} from "../services/responses";
import { getPageTemplate } from "../services/read-templates";
import basicAuth = require("basic-auth");

async function fillAdminTemplate(
  template: string | undefined,
  offset: number
): Promise<string | undefined> {
  const tableRows: number = 5;
  const books = await getBooks(offset, tableRows);
  const libraryLength = await getLibraryLength();
  if (!books || !libraryLength) {
    return;
  }
  const pagination = Math.ceil(libraryLength / tableRows);
  let ul: string = "";
  const active: string = "background: gold";
  const li: string = `<li style="padding: 8px; margin: 8px; cursor: pointer; border-radius: 50%; %background%">
  <a href="/admin/?offset=%page-link%">%page-number%</a>
  </li>`;
  for (let i = 0; i < pagination; i++) {
    ul += li
      .replace("%page-number%", `${i + 1}`)
      .replace("%page-link%", `${i}`);
    ul =
      i === offset
        ? ul.replace("%background%", active)
        : ul.replace("%background%", "");
  }
  const tr: string = `<tr>
          <td>%title%</td>
          <td>%author%</td>
          <td>%year%</td>
          <td>%delete%</td>
          <td>%views%</td>
          <td>%wants%</td>
          </tr>`;

  const deleteBook = (id: number): string =>
    `<a href="" class="delete_book" id="${id}">Удалить из библиотеки</a>`;
  let table: string = "";
  books.forEach((book) => {
    table += tr
      .replace(/%title%/g, book.title)
      .replace(/%author%/g, book.author)
      .replace(/%year%/g, `${book.year}`)
      .replace(/%views%/g, `${book.views}`)
      .replace(/%wants%/g, `${book.wants}`)
      .replace(/%delete%/g, deleteBook(book.id));
  });
  return template?.replace("%book-info%", table).replace("%pagination%", ul);
}

export async function createAdminPage(req: Request, res: Response) {
  if (req.query.logout) {
    return sendLogout(res);
  }
  if (!(await isAdmin(req))) {
    return sendBasicAuth(res)
  }
  const template = await getPageTemplate("../view/admin-page-template.html");
  const offset: number = req.query.offset ? +req.query.offset : 0;
  if (!isValidNumber(offset, 0)) {
    return sendBadRequest(res);
  }
  const adminPage = await fillAdminTemplate(template, offset);
  adminPage ? res.send(adminPage) : sendServerError(res);
}
