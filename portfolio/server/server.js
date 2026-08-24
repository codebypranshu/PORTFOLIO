import express from "express";
import cors from "cors";

import { getStats } from "./controllers/leetcodeController.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/leetcode/:username", getStats);

app.get("/", (req, res) => {
  res.json({
    message: "Portfolio backend is running",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});