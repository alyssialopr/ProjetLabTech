import express from "express";
import dotenv from "dotenv";
import analyseSammaryRoute from "./routes/analyseSammaryRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use('/analyse', analyseSammaryRoute);

app.get("/", (_, res) => {
  res.send("API OK !");
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
})