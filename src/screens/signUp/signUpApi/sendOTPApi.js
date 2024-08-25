import { API_BASE_URL, SEND_OTP_ENDPOINT } from "../../../utils/API_CONSTANTS";

class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "APIError";
    this.statusCode = statusCode;
  }
}

const SendOtp = async (rollNo, reCaptchaToken) => {
  console.log(reCaptchaToken);

  try {
    const response = await fetch(API_BASE_URL + SEND_OTP_ENDPOINT, {
      method: "POST",
      mode: "cors", // This is the default and is fine to include
      headers: {
        "Content-Type": "application/json", // Only necessary headers
      },
      body: JSON.stringify({
        rollNo: rollNo,
        recaptcha: reCaptchaToken,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new APIError(data.message || "An error occurred during OTP sending.", response.status);
    }

    console.log(data);

    return data;
  } catch (error) {
    console.log(error.message);
    throw new APIError(error.message || "An unknown error occurred.", error.statusCode || 500);
  }
};

export default SendOtp;
