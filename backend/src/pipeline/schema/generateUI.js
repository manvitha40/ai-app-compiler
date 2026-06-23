export async function generateUI(architecture) {
  const pages = architecture.pages.map(page => ({
    name: page,
    components: getComponents(page)
  }));

  return { pages };
}

function getComponents(page) {

  switch (page) {

    case "Login":
      return ["LoginForm"];

    case "Dashboard":
      return ["StatsCard", "AnalyticsCard"];

    case "Contacts":
      return ["ContactsTable", "AddContactButton"];

    case "Payments":
      return ["PaymentTable", "PaymentForm"];

    case "Products":
      return ["ProductTable", "AddProductButton"];

    case "Orders":
      return ["OrderTable", "OrderDetails"];

    case "Doctors":
      return ["DoctorTable", "AddDoctorButton"];

    case "Patients":
      return ["PatientTable", "AddPatientButton"];

    case "Appointments":
      return ["AppointmentTable", "BookAppointmentButton"];

    case "Courses":
      return ["CourseTable", "AddCourseButton"];

    case "Assignments":
      return ["AssignmentTable", "CreateAssignmentButton"];

    case "Suppliers":
      return ["SupplierTable", "AddSupplierButton"];

    case "Stock":
      return ["StockTable", "UpdateStockButton"];

    default:
      return ["Container"];
  }
}