export async function generateArchitecture(intent) {

  let entities = [];
  let pages = [];
  const roles = ["Admin", "User"];

  switch (intent.appType) {

    case "CRM":
      entities = ["User", "Contact", "Payment"];
      pages = ["Dashboard", "Contacts", "Payments"];
      break;

    case "Ecommerce":
      entities = ["User", "Product", "Order"];
      pages = ["Dashboard", "Products", "Orders"];
      break;

    case "Hospital":
      entities = ["Doctor", "Patient", "Appointment"];
      pages = ["Dashboard", "Doctors", "Patients", "Appointments"];
      break;

    case "LMS":
      entities = ["Student", "Course", "Assignment"];
      pages = ["Dashboard", "Courses", "Assignments"];
      break;

    case "Inventory":
      entities = ["Product", "Supplier", "Stock"];
      pages = ["Dashboard", "Products", "Suppliers", "Stock"];
      break;

    default:
      entities = ["User"];
      pages = ["Dashboard"];
  }
  

  if (intent.features.includes("login")) {
    pages.unshift("Login");
  }

  return {
    entities,
    roles,
    pages
  };
}