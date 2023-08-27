import basicAuth = require("basic-auth");
import bcrypt = require("bcrypt");
import { Request } from "express";
import { Admin } from "../model/types";

const admin: Admin = {
  name: "admin",
  password: "$2b$10$OweiKjC65IIZyAZHRUGbSu0ygo4gQr60jMM3wOjkkL9wwYsnpTMay",
};

export async function isAdmin(req: Request): Promise<boolean> {
  const credentials = basicAuth(req);
  return (
    credentials?.name === admin.name &&
    (await bcrypt.compare(credentials?.pass, admin.password))
  );
}

export function isValidNumber(num: number, min: number): boolean {
  return !isNaN(num) && num >= min;
}
