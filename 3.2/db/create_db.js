const mysql = require("mysql2/promise");
const fs = require("fs");
const path = require("path");
const dbConfig = require("./dbconfig");

async function createDatabase() {
  const pool = mysql.createPool(dbConfig);
  try {
    const sqlCommands = fs
      .readFileSync(path.join(__dirname, "001_create_db.sql"), "utf8")
      .split(";");

    for (const command of sqlCommands) {
      if (command === "") continue;
      await pool.query(command);
    }
  } catch (err) {
    console.error(err.message);
  }
  pool.end();
}

async function fillingDatabase() {
  const pool = mysql.createPool(dbConfig);
  let [tables] = await pool.query("SHOW TABLES");
  tables = tables.map((item) => Object.values(item)[0]);
  for (const table in tables) {
    await fillingTable(tables[table], pool);
  }
  pool.end();
}

async function fillingTable(table, pool) {
  try {
    const sqlCommand = fs.readFileSync(
      path.join(__dirname, `${table}.sql`),
      "utf8"
    );
    await pool.query(sqlCommand);
  } catch (err) {
    console.error(err.message);
  }
}
createDatabase()
fillingDatabase()