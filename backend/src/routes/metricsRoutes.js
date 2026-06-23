import express from "express";

import {
  getMetrics
}
from "../utils/metrics.js";

const router =
  express.Router();

router.get(
  "/metrics",
  (req, res) => {

    res.json(
      getMetrics()
    );

  }
);

export default router;