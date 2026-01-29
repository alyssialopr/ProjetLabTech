import express from "express";
import dotenv from "dotenv";
import analyseSammaryRoute from "./routes/analyseSammaryRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello World! 2');
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
})