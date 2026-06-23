export function validateConsistency(
  architecture,
  ui,
  db,
  api
) {

  const errors = [];

  const tables =
    db.tables.map(t => t.name);

  const endpoints =
    api.endpoints.map(e => e.path);

  if (
    architecture.pages.includes("Contacts")
    &&
    !tables.includes("contacts")
  ) {
    errors.push(
      "Contacts page exists but contacts table missing"
    );
  }

  if (
    tables.includes("users")
    &&
    !endpoints.includes("/users")
  ) {
    errors.push(
      "Users table exists but /users endpoint missing"
    );
  }

  return {
    valid: errors.length === 0,
    errors
  };
}