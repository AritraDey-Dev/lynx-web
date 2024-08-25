import { API_BASE_URL, VERIFY_OTP_ENDPOINT } from "../../../utils/API_CONSTANTS";

class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "APIError";
    this.statusCode = statusCode;
  }
}

const VerifyOtp = async (rollNo, otp) => {
  try {
    const response = await fetch(API_BASE_URL + VERIFY_OTP_ENDPOINT, {
      method: "POST",
      mode: "cors", // CORS mode is fine to include
      headers: {
        "Content-Type": "application/json", // Only necessary headers
      },
      body: JSON.stringify({
        rollNo: rollNo,
        otp: otp
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Throw an APIError instance
      throw new APIError(data.message || "An error occurred during OTP verification.", response.status);
    }

    console.log(data);

    return data;
  } catch (error) {
    console.log(error.message);
    throw new APIError(error.message || "An unknown error occurred.", error.statusCode || 500);
  }
};

export default VerifyOtp;
