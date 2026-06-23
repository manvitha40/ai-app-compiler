export function generateAssumptions(prompt) {

  const assumptions = [];

  const text = prompt.toLowerCase();

  if (text.includes("ecommerce")) {

    assumptions.push(
      "Authentication enabled by default"
    );

    assumptions.push(
      "Admin role created"
    );

    assumptions.push(
      "Product catalog included"
    );

    assumptions.push(
      "Order management enabled"
    );
  }

  if (text.includes("crm")) {

    assumptions.push(
      "Admin and User roles created"
    );

    assumptions.push(
      "Dashboard included by default"
    );
  }

  return assumptions;
}