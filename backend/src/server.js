import express from "express";
import cors from "cors";
import compilerRoutes from "./routes/compilerRoutes.js";
import metricsRoutes from "./routes/metricsRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", compilerRoutes);
app.use("/api", metricsRoutes);

app.get("/", (req, res) => {
  res.send("AI Compiler Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});