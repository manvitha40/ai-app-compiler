export async function generateDB(architecture) {

  const tables = [];

  architecture.entities.forEach(entity => {
    

    switch(entity) {

      case "User":
        tables.push({
          name: "users",
          columns: [
            { name: "id", type: "uuid" },
            { name: "name", type: "string" },
            { name: "email", type: "string" }
          ]
        });
        break;

      case "Contact":
        tables.push({
          name: "contacts",
          columns: [
            { name: "id", type: "uuid" },
            { name: "name", type: "string" },
            { name: "phone", type: "string" }
          ]
        });
        break;

      case "Payment":
        tables.push({
          name: "payments",
          columns: [
            { name: "id", type: "uuid" },
            { name: "amount", type: "number" }
          ]
        });
        break;

      case "Product":
        tables.push({
          name: "products",
          columns: [
            { name: "id", type: "uuid" },
            { name: "name", type: "string" },
            { name: "price", type: "number" }
          ]
        });
        break;

      case "Order":
        tables.push({
          name: "orders",
          columns: [
            { name: "id", type: "uuid" },
            { name: "total", type: "number" }
          ]
        });
        break;

      case "Doctor":
        tables.push({
          name: "doctors",
          columns: [
            { name: "id", type: "uuid" },
            { name: "name", type: "string" },
            { name: "specialization", type: "string" }
          ]
        });
        break;

      case "Patient":
        tables.push({
          name: "patients",
          columns: [
            { name: "id", type: "uuid" },
            { name: "name", type: "string" }
          ]
        });
        break;

      case "Appointment":
        tables.push({
          name: "appointments",
          columns: [
            { name: "id", type: "uuid" },
            { name: "date", type: "date" }
          ]
        });
        break;

      case "Student":
        tables.push({
          name: "students",
          columns: [
            { name: "id", type: "uuid" },
            { name: "name", type: "string" }
          ]
        });
        break;

      case "Course":
        tables.push({
          name: "courses",
          columns: [
            { name: "id", type: "uuid" },
            { name: "title", type: "string" }
          ]
        });
        break;

      case "Assignment":
        tables.push({
          name: "assignments",
          columns: [
            { name: "id", type: "uuid" },
            { name: "title", type: "string" }
          ]
        });
        break;

      case "Supplier":
        tables.push({
          name: "suppliers",
          columns: [
            { name: "id", type: "uuid" },
            { name: "name", type: "string" }
          ]
        });
        break;

      case "Stock":
        tables.push({
          name: "stock",
          columns: [
            { name: "id", type: "uuid" },
            { name: "quantity", type: "number" }
          ]
        });
        break;
    }

  });

  return { tables };
}