import { extractIntent } from "./intent/extractIntent.js";
import { generateArchitecture } from "./architecture/generateArchitecture.js";

import { generateUI } from "./schema/generateUI.js";
import { generateDB } from "./schema/generateDB.js";
import { generateAPI } from "./schema/generateAPI.js";
import { generateAuth } from "./schema/generateAuth.js";

import { validateUI } from "./validation/validateUI.js";
import { validateDB } from "./validation/validateDB.js";
import { validateAPI } from "./validation/validateAPI.js";
import { validateConsistency } from "./validation/consistencyValidator.js";

import { repairSchemas } from "./repair/repairEngine.js";

import { generateAssumptions } from "./assumptions/generateAssumptions.js";

import { updateMetrics } from "../utils/metrics.js";

import { generateWarnings } from "./validation/generateWarnings.js";

import { generateSummary } from "./summary/generateSummary.js";

import { generateConfidence } from "./confidence/generateConfidence.js";

import { generateRecommendations } from "./recommendations/generateRecommendations.js";

import { generateRuntimePlan } from "./runtime/generateRuntimePlan.js";

import { generateReport } from "./report/generateReport.js";

import { generateExecution } from "./runtime/generateExecution.js";

import { generateTradeoffAnalysis } from "./analysis/generateTradeoffAnalysis.js";

export async function compile(prompt) {

  // Start timer
  const startTime = Date.now();

  // Stage 1: Intent Extraction
  const intent = await extractIntent(prompt);

  // Stage 2: Architecture Generation
  const architecture = await generateArchitecture(intent);

  // Stage 3: Schema Generation
  const ui = await generateUI(architecture);
  const db = await generateDB(architecture);
  const api = await generateAPI(architecture);
  const auth = await generateAuth();

  // Stage 4: Validation
  const uiValidation = validateUI(ui);
  const dbValidation = validateDB(db);
  const apiValidation = validateAPI(api);

  const consistency = validateConsistency(
    architecture,
    ui,
    db,
    api
  );

  // Stage 5: Repair
  const repairResult = repairSchemas(
    architecture,
    ui,
    db,
    api,
    {
      uiValidation,
      dbValidation,
      apiValidation,
      consistency
    }
  );

  // Stage 6: Revalidation
  const repairedConsistency = validateConsistency(
    architecture,
    ui,
    repairResult.db,
    api
  );

  // Stage 7: Assumptions
  const assumptions = generateAssumptions(prompt);

  const summary =
generateSummary(
  intent,
  architecture,
  db,
  api
);

  const warnings = generateWarnings(prompt);

  const confidence =
generateConfidence(
  warnings,
  {
    ui: uiValidation,
    db: dbValidation,
    api: apiValidation,
    consistency: repairedConsistency
  },
  {
    applied:
      repairResult.repaired.length > 0
  }
);

const recommendations = generateRecommendations(intent);

const runtimePlan = generateRuntimePlan(intent);

const report =
generateReport(
  summary,
  confidence,
  recommendations,
  {
    ui: uiValidation,
    db: dbValidation,
    api: apiValidation,
    consistency: repairedConsistency
  },
  {
    applied:
      repairResult.repaired.length > 0,

    actions:
      repairResult.repaired
  },
  runtimePlan
);

const execution =
generateExecution(
  {
    ui: uiValidation,
    db: dbValidation,
    api: apiValidation,
    consistency: repairedConsistency
  },
  runtimePlan
);
const tradeoffAnalysis =
generateTradeoffAnalysis();



  // Calculate latency
  const latency = Date.now() - startTime;

  // Update metrics
  updateMetrics(
    true,
    repairResult.repaired.length > 0,
    latency
  );

  // Final Output
  return {
    intent,
    architecture,
    ui,
    db: repairResult.db,
    api,
    auth,
    assumptions,
    summary,
    confidence,
    runtimePlan,
    warnings,
    execution,
    recommendations,
    report,
    tradeoffAnalysis,
    
    validation: {
      ui: uiValidation,
      db: dbValidation,
      api: apiValidation,
      consistency: repairedConsistency
    },

    repair: {
      applied: repairResult.repaired.length > 0,
      actions: repairResult.repaired
    }
  };
}