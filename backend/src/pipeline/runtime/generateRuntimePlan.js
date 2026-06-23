export function generateRuntimePlan(intent) {

  switch (intent.appType) {

    case "CRM":

      return {
        frontend: "React",
        backend: "Node.js + Express",
        database: "MongoDB",
        deployment: "Vercel + Render"
      };

    case "Ecommerce":

      return {
        frontend: "React",
        backend: "Node.js + Express",
        database: "MongoDB",
        deployment: "AWS"
      };

    case "Hospital":

      return {
        frontend: "React",
        backend: "Node.js + Express",
        database: "PostgreSQL",
        deployment: "AWS"
      };

    case "LMS":

      return {
        frontend: "React",
        backend: "Node.js + Express",
        database: "PostgreSQL",
        deployment: "Azure"
      };

    default:

      return {
        frontend: "React",
        backend: "Node.js + Express",
        database: "MongoDB",
        deployment: "Render"
      };
  }
}