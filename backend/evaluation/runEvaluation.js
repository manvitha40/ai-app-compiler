import fs from "fs";
import { compile } from "../src/pipeline/compiler.js";

const normalPrompts =
  JSON.parse(
    fs.readFileSync(
      "./evaluation/normal-prompts.json",
      "utf8"
    )
  );

const edgePrompts =
  JSON.parse(
    fs.readFileSync(
      "./evaluation/edge-prompts.json",
      "utf8"
    )
  );

const prompts = [
  ...normalPrompts,
  ...edgePrompts
];

async function runEvaluation() {

  const results = [];

  for (const test of prompts) {

    const start = Date.now();

    try {

      const output =
        await compile(test.prompt);

      const latency =
        Date.now() - start;

      results.push({
        prompt: test.prompt,
        success: true,
        latency,
        repaired:
          output.repair.applied,
        warnings:
          output.warnings?.length || 0
      });

    } catch (err) {

      results.push({
        prompt: test.prompt,
        success: false,
        latency: 0,
        error: err.message
      });

    }
  }

  fs.writeFileSync(
    "./evaluation/results.json",
    JSON.stringify(results, null, 2)
  );

  console.log(
    "Evaluation Complete"
  );
}

runEvaluation();