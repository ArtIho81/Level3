import { Request, Response } from "express";
import mysql = require("mysql2");
import { ResultSetHeader }  from "mysql2";
import { dbConfig } from "../db/dbconfig";
import fs = require("fs");
import path = require("path");

export interface Book {
  id: number;
  title: string;
  author: string;
  views: number;
  wants: number;
  is_deleted: 0 | 1;
}

export async function getLibraryLength(): Promise<number | undefined> {
  try {
    const pool = mysql.createPool(dbConfig).promise();
    const resultCount = (
      await pool.query(
        "SELECT COUNT(*) AS libraryLength FROM books WHERE is_deleted = ?;",
        [0]
      )
    )[0] as { libraryLength: number }[];
    const libraryLength: number = resultCount[0]["libraryLength"];
    pool.end();
    return libraryLength;
  } catch (error) {
    console.log(error);
  }
}

export async function getBooks(
  offset: number,
  booksPerPage: number
): Promise<Book[] | undefined> {
  try {
    const pool = mysql.createPool(dbConfig).promise();
    const books = (
      await pool.query(
        `SELECT * FROM books WHERE is_deleted = ? 
      LIMIT ${booksPerPage} OFFSET ${offset * booksPerPage};`,
        [0]
      )
    )[0] as Book[];
    return books;
  } catch (error) {
    console.log(error);
  }
}

export async function getBook(bookId: number): Promise<Book | undefined> {
  try {
    const pool = mysql.createPool(dbConfig).promise();
    const result = (
      await pool.query("SELECT * FROM books WHERE id = ?", [bookId])
    )[0] as [Book];

    await pool.query("UPDATE books SET views = views + 1 WHERE id = ?", [
      bookId,
    ]);
    pool.end();
    return result[0];
  } catch (err) {
    console.log(err);
  }
}

export async function increaseWants(
  req: Request,
  res: Response
) {
  try {
    const bookId: number = +req.body.id;
    console.log(bookId)
    const pool = mysql.createPool(dbConfig).promise();
    await pool.query("UPDATE books SET wants = wants + 1 WHERE id = ? ", [
      bookId,
    ]);
    pool.end();
    res.json({ok:true})
  } catch (err) {
    console.log(err);
  }
}

export async function addBookToLibrary(req: Request, res: Response) {
  try {
    const { title, authors } = req.body;
    const pool = mysql.createPool(dbConfig).promise();
    const resultSelectTitle = (
      await pool.query("SELECT id FROM books WHERE title = ?", [title])
    )[0] as { id: number }[] | [];
    let bookId: number | undefined =
      resultSelectTitle.length > 0 ? resultSelectTitle[0].id : undefined;
    /** Cheсked the book is already in the library */
    if (bookId) {
      const resultSelectAuthors = (
        await pool.query("SELECT id FROM books WHERE author = ?", [authors])
      )[0] as { id: number }[] | [];
      let authorsId: number | undefined =
        resultSelectAuthors.length > 0 ? resultSelectAuthors[0].id : undefined;
      if (bookId === authorsId) {
        pool.end();
        console.log("The book is already in the library");
        return res.json({ ok: false });
      }
    }
    const resultInsert = (
      await pool.query("INSERT INTO books (title, author) VALUES (?, ?)", [
        title,
        authors,
      ])
    )[0] as ResultSetHeader;
    if (resultInsert) {
      bookId = resultInsert.insertId;
    }
    pool.end();

    /** Rename book cover file */
    if (req.file) {
      const filePath = req.file.path;
      const regExp = /\d+\.jpg$/;
      const newPath = filePath.replace(regExp, bookId + ".jpg");
      fs.renameSync(filePath, newPath);
    }
    res.status(200).json({ reload: true });
  } catch (err) {
    console.log(err);
  }
}

export async function markDeletingBook(
  req: Request,
  res: Response
): Promise<number | undefined> {
  if (req.body) {
    const id: number = +req.body.id;
    const pool = mysql.createPool(dbConfig).promise();
    const resultUpdate = (
      await pool.query("UPDATE books SET is_deleted = ? WHERE id = ? ", [1, id])
    )[0] as ResultSetHeader;
    pool.end();
    if (resultUpdate.affectedRows !== 0) {
      res.status(200).json({ id });
      return id;
    }
  }
}

export async function deleteBookFromLibrary(id: number): Promise<void> {
  const pool = mysql.createPool(dbConfig).promise();
  const resultDelete = (
    await pool.query("DELETE FROM books WHERE id = ?", [id])
  )[0] as ResultSetHeader;
  if (resultDelete.affectedRows !== 0) {
    const filePath = path.join(__dirname, `public/img/${id}.jpg`);
    try {
      fs.unlinkSync(filePath);
    } catch (err) {
      console.log(err);
    }
  }
  pool.end();
}
