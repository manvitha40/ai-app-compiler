import express from "express";
import { compile } from "../pipeline/compiler.js";

const router = express.Router();

router.post("/compile", async (req, res) => {
  try {
    const { prompt } = req.body;

    const result = await compile(prompt);

    res.json(result);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
});

export default router;