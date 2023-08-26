import mysql = require("mysql2/promise");

export interface Connect {
  host: string;
  user: string;
  password: string;
  database: string;
}

export const dbConfig: Connect = {
  host: process.env.host || "localhost",
  user: process.env.user || "root",
  password: process.env.password || "",
  database: process.env.database || "books_library",
};

export const pool = mysql.createPool(dbConfig) 
