import express = require("express");
import path = require("path");
import { startSchedules } from "./schedules";
import { userRouter } from "./routes/user-routes";
import { adminRouter } from "./routes/admin-routes";

const PORT: string | number = process.env.port || 3000;

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(express.json());
app.use(userRouter);
app.use(adminRouter);

app.listen(PORT, () => {
  startSchedules();
  console.log(`Server started on port ${PORT}`);
});