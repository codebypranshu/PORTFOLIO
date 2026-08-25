import express from "express";
import cors from "cors";
import dsaRoutes from "./routes/dsaRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/dsa", dsaRoutes);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
app.get("/", (req, res) => {
  res.send("Backend working ✅");
});