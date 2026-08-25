import express from "express";
import { getDSAStats } from "../controllers/dsaController.js";

const router = express.Router();

router.get("/", getDSAStats);

export default router;