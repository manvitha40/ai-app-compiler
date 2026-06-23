export function generateWarnings(prompt) {

  const warnings = [];

  const text = prompt.toLowerCase();

  if (
    text === "build app" ||
    text === "app" ||
    text === "create platform"
  ) {
    warnings.push(
      "Prompt is underspecified. Using default architecture."
    );
  }

  if (
  text.includes("role") &&
  text.includes("no login")
)
{
  warnings.push(
    "Role-based access typically requires authentication."
  );
}

  if (
    text.includes("public") &&
    text.includes("private")
  ) {
    warnings.push(
      "Conflicting visibility requirements detected."
    );
  }

  if (
    text.includes("no database") &&
    text.includes("analytics")
  ) {
    warnings.push(
      "Analytics typically require stored data."
    );
  }

  return warnings;
}