import { Request, Response } from "express";
import { getBooks, getLibraryLength } from "./library";
import fs = require("fs");
import path = require("path");
import basicAuth = require("basic-auth");

const filePath = path.join(__dirname, "../templates/admin-page-template.html");

async function fillAdminTemplate(template: string, offset: number) {
  const tableRows = 5;
  const books = await getBooks(offset, tableRows);
  const libraryLength = await getLibraryLength();
  if (!books || !libraryLength) {
    return "<h1>Something wrong!</h1>";
  }
  const pagination: number = Math.ceil(libraryLength / tableRows);
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
      .replace(/%views%/g, `${book.views}`)
      .replace(/%wants%/g, `${book.wants}`)
      .replace(/%delete%/g, deleteBook(book.id));
  });
  return template.replace("%book-info%", table).replace("%pagination%", ul);
}

export async function createAdminPage(req: Request, res: Response) {
  if (req.query.logout) {
    return res.status(401).send("<h1>Logout is successfully complete</h1> ");
  }
  const credentials = basicAuth(req);
  if (
    !credentials ||
    credentials.name !== "admin" ||
    credentials.pass !== "password"
  ) {
    return res
      .status(401)
      .set("WWW-Authenticate", 'Basic realm="Restricted Area"')
      .send();
  }
  fs.readFile(filePath, "utf8", async (err, template) => {
    if (err) {
      console.log("Error reading file book-page-template.html");
      return res.send("Something wrong");
    }
    const offset: number = req.query.offset ? +req.query.offset : 0;
    res.send(await fillAdminTemplate(template, offset));
  });
}
