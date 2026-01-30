import express from "express";
import dotenv from "dotenv";
import analyseSammaryRoute from "./routes/analyseSammaryRoute.js";
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://projet-lab-tech-38dy.vercel.app"
  ],
  methods: ["GET", "POST"],
}));

app.use("/analyse", analyseSammaryRoute);

app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err);
  res.status(500).json({
    error: "Erreur serveur",
    details: err.message,
  });
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:3001");
});
