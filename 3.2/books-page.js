const booksLibrary = require("./library");
let { templateBooksPage, sectionMain } = require("./books-page-template");

const bookItemTemplate = `<div data-book-id="%id%" class="book_item col-xs-6 col-sm-3 col-md-2 col-lg-2">
<div class="book">
<a href="%book_page%"><img src="%img%" alt="%title%">
<div data-title="%title%" class="blockI" style="height: 46px;">
<div data-book-title="%title%" class="title size_text">%title%</div>
<div data-book-author="%author%" class="author">%author%</div>
</div>
</a>
<a href="%book_page%">
<button type="button" class="details btn btn-success">Читать</button>
</a>
</div>
</div>`;

const booksPerPage = 10

function createBooksPage(req, res) {
  let offset = +req.query.offset || 0;
  offset = offset >= 20 ? 20 : offset;
  const booksHTML = createContent(offset);
  const buttons = addPaginationButtons(offset);
  res.send(
    templateBooksPage.replace(
      "%main%",
      sectionMain.replace("%books%", booksHTML).replace("%buttons%", buttons)));
}

function fillTemplate(el) {
  const bookPageLink = "http://localhost:3000/book/" + el.id;
  return bookItemTemplate
    .replaceAll("%id%", el.id)
    .replaceAll("%img%", el.img)
    .replaceAll("%book_page%", bookPageLink)
    .replaceAll("%author%", el.author)
    .replaceAll("%title%", el.title);
}

function addPaginationButtons(offset) {
  let nextButton = "";
  let prevButton = "";

  if (offset > 0) {
    prevButton = `<a href="http://localhost:3000/?offset=${offset - 1}">
    <button id="prev">Назад</button>
    </a>`;
  }
  if ((offset + 1) * booksPerPage < booksLibrary.length) {
    nextButton = `<a href="http://localhost:3000/?offset=${offset + 1}">
    <button id="next">Вперед</button>
    </a>`;
  }
  return `<center><div class="pagination-buttons">
    ${prevButton}
    ${nextButton}
    </div></center>`;
}
function createContent(offset) {
  let content = "";
  booksLibrary
    .slice(offset * booksPerPage, (offset + 1) * booksPerPage)
    .forEach((el) => {
      content += fillTemplate(el);
    });

  return content;
}

module.exports = createBooksPage;
