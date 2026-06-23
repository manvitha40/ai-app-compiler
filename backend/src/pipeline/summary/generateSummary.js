export function generateSummary(
  intent,
  architecture,
  db,
  api
) {
  return {
    appType: intent.appType,

    entities:
      architecture.entities.length,

    pages:
      architecture.pages.length,

    tables:
      db.tables.length,

    endpoints:
      api.endpoints.length
  };
}