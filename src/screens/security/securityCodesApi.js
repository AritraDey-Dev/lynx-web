import { API_LCA_URL, SECURITY_CODES_FETCH_ENDPOINT } from "../../utils/API_CONSTANTS";

class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "APIError";
    this.statusCode = statusCode;
  }
}

const SecurityCodesFetch = async () => {
  try {
    const response = await fetch(API_LCA_URL + SECURITY_CODES_FETCH_ENDPOINT, {
      method: "GET",
      mode: "cors", // Ensure CORS mode is enabled for cross-origin requests
      headers: {
        "Content-Type": "application/json",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xsTm8iOjEwNzEyMTA1OCwiaWQiOiI2MmZhOGIxZDJmNTVhY2FmNTNlZjZmMGEiLCJpYXQiOjE3MjMyOTk0ODIsImV4cCI6MTcyNTg5MTQ4Mn0.hP8EvUI9HVmHjEPqdlqK6T7M3NfVD4V6YJyxR9lgYns" // Example token, replace with your dynamic token logic if needed
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new APIError(data.message || "An error occurred during fetching security codes.", response.status);
    }

    console.log(data);

    return data;
  } catch (error) {
    console.log(error.message);
    throw new APIError(error.message || "An unknown error occurred.", error.statusCode || 500);
  }
};

export default SecurityCodesFetch;
