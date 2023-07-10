const express = require("express");
const path = require("path");

const app = express();
const booksLibrary = require("./library.js");
const createBooksPage = require("./books-page.js");
const { createBookPage, createAdminPage } = require("./book-page.js");

const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", createBooksPage);

app.get("/book/:id", createBookPage);

app.get("/admin", createAdminPage);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
