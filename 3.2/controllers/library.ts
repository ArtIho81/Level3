import { Request, Response } from "express";
import { pool } from "../db/dbconfig";
import fs = require("fs");
import path = require("path");
import { Book } from "../model/types";

// export interface Book extends RowDataPacket{
//   id: number;
//   title: string;
//   author: string;
// }
// export interface BookInfo extends Book {
//   description?: string;
//   year?: number;
//   pages?: number;
//   views: number;
//   wants: number;
//   is_deleted: 0 | 1;
// }

export async function getLibraryLength(): Promise<number | undefined> {
  try {
    const resultCount = (
      await pool.query(
        "SELECT COUNT(*) AS libraryLength FROM books WHERE is_deleted = ?;",
        [0]
      )
    )[0] as [{ libraryLength: number }];
    return resultCount[0]["libraryLength"];
  } catch (error) {
    console.log(error);
  }
}

export async function getBooks(
  offset: number,
  booksPerPage: number
): Promise<Book[] | undefined> {
  try {
    const [books] = await pool.query<Book[]>(
      `SELECT books.*, GROUP_CONCAT(authors.author SEPARATOR ', ') AS author
    FROM books 
    JOIN book_author_map ON books.id = book_author_map.book_id
    JOIN authors ON authors.id = book_author_map.author_id
    WHERE is_deleted = ?
    GROUP BY books.id
      LIMIT ${booksPerPage} OFFSET ${offset * booksPerPage};`,
      [0]
    );
    return books;
  } catch (error) {
    console.log(error);
  }
}

export async function getBook(bookId: number): Promise<Book | undefined> {
  try {
    const [resultSelect] = await pool.query<Book[]>(
      `SELECT books.*, GROUP_CONCAT(authors.author SEPARATOR ', ') AS author
    FROM books 
    JOIN book_author_map ON books.id = book_author_map.book_id
    JOIN authors ON authors.id = book_author_map.author_id
    WHERE books.id = ?
    GROUP BY books.id`,
      [bookId]
    );

    await pool.query("UPDATE books SET views = views + 1 WHERE id = ?", [
      bookId,
    ]);
    return resultSelect[0];
  } catch (err) {
    console.log(err);
  }
}

export async function increaseWants(req: Request, res: Response) {
  try {
    const bookId: number = +req.body.id;
    await pool.query("UPDATE books SET wants = wants + 1 WHERE id = ? ", [
      bookId,
    ]);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).send("Internal server error");
    console.log(err);
  }
}

export async function getSearchBooks(title: string) {
  try {
    const resultSelect = (
      await pool.query(
        `SELECT books.*, GROUP_CONCAT(authors.author SEPARATOR ', ') AS author
      FROM books 
      JOIN book_author_map ON books.id = book_author_map.book_id
      JOIN authors ON authors.id = book_author_map.author_id
      WHERE is_deleted = ? AND title LIKE ?
      GROUP BY books.id`,
        [0, `%${title}%`]
      )
    )[0] as Book[];
    return resultSelect;
  } catch (err) {
    console.log(err);
  }
}
