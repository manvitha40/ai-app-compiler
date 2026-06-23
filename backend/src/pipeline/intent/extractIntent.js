export async function extractIntent(prompt) {
  const text = prompt.toLowerCase();

  const features = [];

  if (
  text.includes("login") &&
  !text.includes("no login")
) {
  features.push("login");
}


  if (text.includes("contact")) {
    features.push("contacts");
  }

  if (text.includes("payment")) {
    features.push("payments");
  }

  if (text.includes("dashboard")) {
    features.push("dashboard");
  }

  let appType = "Custom";

if (text.includes("crm")) {
  appType = "CRM";
}
else if (text.includes("ecommerce")) {
  appType = "Ecommerce";
}
else if (text.includes("hospital")) {
  appType = "Hospital";
}
else if (text.includes("lms")) {
  appType = "LMS";
}
else if (text.includes("inventory")) {
  appType = "Inventory";
}

return {
  appType,
  features
};
}