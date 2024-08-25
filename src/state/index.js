import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  user: null,
  token: "hello",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    }
  },
});

const loginInitialState = {
  webmail: null,
  password: null,
};


export const loginSlice = createSlice({
  name: "login",
  initialState: loginInitialState,
  reducers: {
    loginUser: (state, action) => {
      state.webmail = action.payload.webmail;
      state.password = action.payload.password;
    },
  },
});

let registrationInitialState = {
  user_roll_no: null,
  user_first_name: "",
  user_last_name: "",
  user_department: "",
  user_country_code: "",
  user_phone_number: "",
  user_gender: "",
  user_country_of_origin: "",
  user_profile_picture: "",
  user_password: "",
  user_dob: "",
  user_address: "",
  user_photo: "",
  user_otp: "",
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState: registrationInitialState,
  reducers: {
    setUserPassword: (state, action) => {
      state.user_password = action.payload;
    },
    signUpUser: (state, action) => {
      state.user_roll_no = action.payload.user_roll_no;
    },
    registerUser: (state, action) => {
      state.user_first_name = action.payload.user_first_name;
      state.user_last_name = action.payload.user_last_name;
      state.user_department = action.payload.user_department;
      state.user_country_code = action.payload.user_country_code;
      state.user_phone_number = action.payload.user_phone_number;
      state.user_gender = action.payload.user_gender;
      state.user_country_of_origin = action.payload.user_country_of_origin;
    },
    dobUser: (state, action) => {
      state.user_dob = action.payload.user_dob;
      state.user_address = action.payload.user_address;
    },
    photoUser: (state, action) => {
      state.user_photo = action.payload.user_photo;
    },
    verifyUser: (state, action) => {
      state.user_otp = action.payload.user_otp;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export const { loginUser } = loginSlice.actions;
export const { signUpUser, setUserPassword, registerUser, dobUser, photoUser, verifyUser } = registrationSlice.actions;

export const authReducer = authSlice.reducer;
export const loginReducer = loginSlice.reducer;
export const registrationReducer = registrationSlice.reducer;
