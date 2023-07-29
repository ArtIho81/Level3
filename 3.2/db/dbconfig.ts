export interface Connection  {
  host: string;
  user: string;
  password: string;
  database: string;
};

export const dbConfig: Connection = {
  host: process.env.host || "localhost",
  user: process.env.user || "root",
  password: process.env.password || "",
  database: process.env.database || "books_library",
};

