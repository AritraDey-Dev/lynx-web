import { LOGIN_ENDPOINT } from "../../utils/API_CONSTANTS"; // Assuming the API base URL is handled by the proxy

class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "APIError";
    this.statusCode = statusCode;
  }
}

const LoginUser = async (rollNo, password) => {
  try {
    const response = await fetch(`/api${LOGIN_ENDPOINT}`, { // Use '/api' prefix for proxying
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rollNo: rollNo,
        password: password,
        reg_token: rollNo, // Ensure this is correct and intended
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new APIError(data.message || "An error occurred during login.", response.status);
    }

    console.log(data);

    return {
      message: data.message,
      statusCode: response.status,
    };
  } catch (error) {
    console.log(error.message);
    throw new APIError(error.message || "An unknown error occurred.", error.statusCode || 500);
  }
};

export default LoginUser;
