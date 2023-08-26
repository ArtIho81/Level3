import { RowDataPacket } from "mysql2";

export interface Book extends RowDataPacket {
  id: number;
  title: string;
  author: string;
  description?: string;
  year?: number;
  pages?: number;
  views: number;
  wants: number;
  is_deleted: 0 | 1;
}

export interface AddBookRequestBody {
  title: string;
  authors: string | string[];
  file?: File;
}

export interface NewBook {
  title: string;
  author: string[];
}

export interface Admin {
  name: string;
  password: string;
}
