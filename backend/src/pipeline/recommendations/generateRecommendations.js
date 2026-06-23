export function generateRecommendations(intent) {

  const recommendations = [];

  switch (intent.appType) {

    case "CRM":

      recommendations.push(
        "Add customer notes"
      );

      recommendations.push(
        "Enable lead management"
      );

      recommendations.push(
        "Add email notifications"
      );

      break;

    case "Ecommerce":

      recommendations.push(
        "Add shopping cart"
      );

      recommendations.push(
        "Enable payment gateway"
      );

      recommendations.push(
        "Add inventory tracking"
      );

      break;

    case "Hospital":

      recommendations.push(
        "Add patient history"
      );

      recommendations.push(
        "Enable doctor scheduling"
      );

      recommendations.push(
        "Add prescription management"
      );

      break;

    default:

      recommendations.push(
        "Add authentication"
      );

      recommendations.push(
        "Add monitoring"
      );

      recommendations.push(
        "Add logging"
      );

  }

  return recommendations;
}