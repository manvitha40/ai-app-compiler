export function generateExecution(
  validation,
  runtimePlan
) {

  const success =
    validation.ui.valid &&
    validation.db.valid &&
    validation.api.valid &&
    validation.consistency.valid;

  return {

    status:
      success ? "SUCCESS" : "FAILED",

    frontend:
      `${runtimePlan.frontend} configuration ready`,

    backend:
      `${runtimePlan.backend} configuration ready`,

    database:
      `${runtimePlan.database} schema validated`,

    executable:
      success,

    timestamp:
      new Date().toISOString()

  };
}