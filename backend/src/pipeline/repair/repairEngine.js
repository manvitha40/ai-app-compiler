export function repairSchemas(
  architecture,
  ui,
  db,
  api,
  validation
) {

  const repaired = [];

  // Contacts page exists but table missing
  if (
    architecture.pages.includes("Contacts") &&
    !db.tables.some(t => t.name === "contacts")
  ) {

    db.tables.push({
      name: "contacts",
      columns: [
        {
          name: "id",
          type: "uuid"
        }
      ]
    });

    repaired.push(
      "Added missing contacts table"
    );
  }

  // Payments page exists but table missing
  if (
    architecture.pages.includes("Payments") &&
    !db.tables.some(t => t.name === "payments")
  ) {

    db.tables.push({
      name: "payments",
      columns: [
        {
          name: "id",
          type: "uuid"
        }
      ]
    });

    repaired.push(
      "Added missing payments table"
    );
  }

  return {
    db,
    repaired
  };
}