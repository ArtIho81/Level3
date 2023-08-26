import { Request, Response } from "express";
import { ResultSetHeader } from "mysql2";
import { pool } from "../db/dbconfig";
import fs = require("fs");
import path = require("path");
import { AddBookRequestBody, NewBook } from "../model/types";
import { sendServerError } from "../services/responses";



export async function addBookToLibrary(req: Request, res: Response) {
  try {
    let { title, authors }: AddBookRequestBody = req.body;
    const newBook: NewBook = {
      title,
      author: typeof authors === "string" ? [authors] : authors.filter(Boolean),
    };
    const bookId: number[] | undefined = await checkBookInLibrary(
      newBook.title
    );
    const newBookId: number | undefined = bookId
      ? await presentBook(newBook, bookId)
      : await noBook(newBook);

    if (req.file && newBookId) {
      const filePath = req.file.path;
      const regExp = /\d+\.jpg$/;
      const newPath = filePath.replace(regExp, newBookId + ".jpg");
      fs.renameSync(filePath, newPath);
    }
    if (newBookId) {
      res.status(200).json({ ok: true });
    } else {
      res.status(201).json({ ok: false });
    }
  } catch (err) {
    console.log(err);
    sendServerError(res)
  }
}
/* Returns array of book ids if book title is present or underfined otherwise */
async function checkBookInLibrary(
  title: string
): Promise<number[] | undefined> {
  const resultSelect = (
    await pool.query(`SELECT id FROM books WHERE title = ?`, [title])
  )[0] as { id: number }[] | [];
  if (resultSelect.length !== 0) {
    return resultSelect.map((item) => item.id);
  }
}
/* Returns array of authors ids if author is present or [] otherwise */
async function checkAuthorsInLibrary(
  authors: string[]
): Promise<number[] | []> {
  const resultSelect = (
    await pool.query(`SELECT id FROM authors WHERE author IN (?);`, [authors])
  )[0] as { id: number }[] | [];
  return resultSelect.map((item) => item.id);
}
/* Returns array of authors ids after adding new authors if there are none yet */
async function addAuthors(authors: string[]): Promise<number[]> {
  const values: string[][] = authors.map((author) => [author]);
  await pool.query(`INSERT IGNORE INTO authors (author) VALUES ?;`, [values]);
  return await checkAuthorsInLibrary(authors);
}

function isArraysSame(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const sortedArray1 = arr1.sort();
  const sortedArray2 = arr2.sort();
  for (let i = 0; i < arr1.length; i++) {
    if (sortedArray1[i] !== sortedArray2[i]) {
      return false;
    }
  }
  return true;
}

async function addToBook_Author(
  bookId: number,
  authorsId: number[]
): Promise<void> {
  for (const authorId of authorsId) {
    await pool.query(
      "INSERT INTO book_author_map (book_id, author_id) VALUES (?,?)",
      [bookId, authorId]
    );
  }
}

async function noBook(newBook: NewBook): Promise<number> {
  console.log("No book");
  const resultInsert = (
    await pool.query("INSERT INTO books (title) VALUES (?)", [newBook.title])
  )[0] as ResultSetHeader;
  const newBookId: number = resultInsert.insertId;
  const authorIds: number[] = await addAuthors(newBook.author);
  await addToBook_Author(newBookId, authorIds);
  return newBookId;
}

async function presentBook(
  newBook: NewBook,
  bookId: number[]
): Promise<number | undefined> {
  console.log("Present book");
  const authorsInId: number[][] = [];
  for (const id of bookId) {
    const resultSelect = (
      await pool.query(
        "SELECT author_id FROM book_author_map WHERE book_id = ?",
        [id]
      )
    )[0] as { author_id: number }[] | [];
    authorsInId.push(resultSelect.map((item) => item.author_id));
  }
  const newAuthorIds: number[] | [] = await checkAuthorsInLibrary(
    newBook.author
  );
  const sameness: boolean[] = [];
  for (const authorInId of authorsInId) {
    sameness.push(isArraysSame(authorInId, newAuthorIds));
  }
  if (sameness.filter(Boolean).length !== 0) {
    console.log("Book already exists in library");
    return;
  }
  const authorIds = await addAuthors(newBook.author);
  const resultInsert = (
    await pool.query("INSERT INTO books (title) VALUES (?)", [newBook.title])
  )[0] as ResultSetHeader;
  const newBookId: number = resultInsert.insertId;
  addToBook_Author(newBookId, authorIds);
  return newBookId;
}

export async function markDeletingBook(
  req: Request,
  res: Response,
  next: Function
): Promise<void> {
  if (req.body) {
    const id: number = +req.body.id;
    const resultUpdate = (
      await pool.query("UPDATE books SET is_deleted = ? WHERE id = ? ", [1, id])
    )[0] as ResultSetHeader;
    if (resultUpdate.affectedRows !== 0) {
      res.status(200).json({ id });
    }
    next();
  }
}

export async function deleteBookFromLibrary(id: number): Promise<void> {
  const resultSelectAuthors = (
    await pool.query(
      "SELECT author_id FROM book_author_map WHERE book_id = ?;",
      [id]
    )
  )[0] as { author_id: number }[];
  const authorsId: number[] = resultSelectAuthors.map((item) => item.author_id);
  const authorsToDelete = [];
  for (const authorId of authorsId) {
    const resultSelectBooks = (
      await pool.query(
        "SELECT COUNT(*) AS books FROM book_author_map WHERE author_id = ?;",
        [authorId]
      )
    )[0] as [{ books: number }];
    if (resultSelectBooks[0].books === 1) {
      authorsToDelete.push(authorId);
    }
  }
  const resultDelete = (
    await pool.query("DELETE FROM books WHERE id = ?;", [id])
  )[0] as ResultSetHeader;
  await pool.query("DELETE FROM authors WHERE id IN (?);", [authorsToDelete]);
  await pool.query("DELETE FROM book_author_map WHERE book_id = ?;", [id]);
  if (resultDelete.affectedRows !== 0) {
    const filePath = path.join(__dirname, `public/img/${id}.jpg`);
    try {
      fs.unlinkSync(filePath);
    } catch (err) {
      console.log(err);
    }
  }
}
