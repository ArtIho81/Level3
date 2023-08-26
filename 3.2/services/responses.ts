import { Response } from "express";

export function sendServerError(res: Response): void {
  res.status(500).send("<h1>Something wrong</h1>");
}
export function sendBadRequest(res: Response): void {
  res.status(400).send("<h1>Bad request</h1>");
}
export function sendLogout(res: Response) {
  res.status(200).send("<h1>Logout is successfully complete</h1> ");
}
export function sendBasicAuth(res: Response) {
  res
    .status(401)
    .set("WWW-Authenticate", 'Basic realm="Restricted Area"')
    .send();
}