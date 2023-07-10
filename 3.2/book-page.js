const booksLibrary = require("./library");
let {
  templateBookPage,
  bookPageSection_main,
} = require("./book-page-template");
let adminPage = require("./admin-page")


function createBookPage(req, res) {
  const bookId = +req.params.id;
  const book = booksLibrary.find((el) => el.id === bookId);
  book.viewsCounter++
  res.send(templateBookPage.replace("%main%", fillBookTemplate(book)));
}

function fillBookTemplate(book) {
  return bookPageSection_main
    .replaceAll("%book-id%", book.id)
    .replace("%book-title%", book.title)
    .replace("%book-author%", book.author);
}

function createAdminPage(req, res) {
  const tr = `<tr>
          <td>%title%</td>
          <td>%author%</td>
          <td>%year%</td>
          <td>%views%</td>
        </tr>`;
  let table = "";
  booksLibrary.forEach((book) => {
    table += tr
      .replace("%img%", book.img)
      .replace("%title%", book.title)
        .replace("%author%", book.author)
        .replace("%views%", book.viewsCounter);
  });
  res.send(adminPage.replace("%tr%",table))
}
module.exports = {createBookPage, createAdminPage };
