export async function generateAPI(architecture) {

  const endpoints = [];

  architecture.entities.forEach(entity => {

    endpoints.push({
      path: `/${entity.toLowerCase()}s`,
      method: "GET"
    });

    endpoints.push({
      path: `/${entity.toLowerCase()}s`,
      method: "POST"
    });

  });

  return { endpoints };
}