import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mistralRoutes from "./routes/mistralRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/mistral', mistralRoutes);

app.get("/", (req, res) => {
  res.send("API OK !");
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
})