export async function generateAuth() {

  return {
    roles: {
      Admin: ["*"],
      User: ["read"]
    }
  };

}