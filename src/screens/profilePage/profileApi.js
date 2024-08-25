import { PROFILE_ENDPOINT } from "../../utils/API_CONSTANTS"; // Assuming the API base URL is handled by the proxy

class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "APIError";
    this.statusCode = statusCode;
  }
}

const ProfileUser = async () => {
  try {
    const response = await fetch(`/api${PROFILE_ENDPOINT}`, { // Using '/api' prefix for proxying
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xsTm8iOjEwNzEyMTA1OCwiaWQiOiI2NjEzYjg5NjBlMDQyZTExYzljZDA0OGQiLCJpYXQiOjE3MjMyOTg5ODIsImV4cCI6MTcyNTg5MDk4Mn0.RzyQvgMAzdkxPcHY-O3KuKsskF4ICYImrh8nhxPupFQ" // Replace with your actual token
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new APIError(data.message || "An error occurred while loading your profile.", response.status);
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

export default ProfileUser;
