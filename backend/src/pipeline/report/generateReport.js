export function generateReport(
  summary,
  confidence,
  recommendations,
  validation,
  repair,
  runtimePlan
) {

  return {

    generatedAt:
      new Date().toISOString(),

    summary,

    confidence,

    recommendations,

    validation,

    repair,

    runtimePlan

  };
}