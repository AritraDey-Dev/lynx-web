import { API_BASE_URL, STUDENT_REGISTER_ENDPOINT } from "../../../utils/API_CONSTANTS";

class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "APIError";
    this.statusCode = statusCode;
  }
}

const StudentDetails = async () => {
  try {
    const response = await fetch(API_BASE_URL + STUDENT_REGISTER_ENDPOINT, {
      method: "POST",
      mode: "cors", // Default mode for cross-origin requests
      headers: {
        "Content-Type": "application/json",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xsTm8iOjEwNzEyMTA1OCwiaWQiOiI2NjEzYjg5NjBlMDQyZTExYzljZDA0OGQiLCJpYXQiOjE3MjMyOTg5ODIsImV4cCI6MTcyNTg5MDk4Mn0.RzyQvgMAzdkxPcHY-O3KuKsskF4ICYImrh8nhxPupFQ"
      },
      body: JSON.stringify({
        first_name: "",
        last_name: "",
        department: "",
        dob: "",
        mobile_no: 1,
        gender: "",
        nationality: "",
        new_password: "",
        confirm_password: "",
        reg_token: "rollNo",
        countryCode: "",
        department_id: "",
        profileImg: "optional - imagefile",
        passportImg: "optionalFIle"
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Throw an APIError instance
      throw new APIError(data.message || "An error occurred during registration.", response.status);
    }

    console.log(data);

    return data;
  } catch (error) {
    console.log(error.message);
    throw new APIError(error.message || "An unknown error occurred.", error.statusCode || 500);
  }
};

export default StudentDetails;
