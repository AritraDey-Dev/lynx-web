import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';
import bottomNavReducer from './bottomNavSlice';
import authNavReducer from './authNavSlice';
import securityReducer from './securitySlice';
import resetPasswordReducer from './resetPasswordSlice';
import studentDetailsReducer from './studentDetailsSlice';
import studentEditProfileReducer from './studentEditProfileSlice';
import studentRegistrationReducer from './studentRegistrationSlice';
import userReducer from './userSlice';

// Combine all slices into a single store
const store = configureStore({
  reducer: {
    login: loginReducer,
    bottomNav: bottomNavReducer,
    authNav: authNavReducer,
    security: securityReducer,
    resetPassword: resetPasswordReducer,
    studentDetails: studentDetailsReducer,
    studentEditProfile: studentEditProfileReducer,
    studentRegistration: studentRegistrationReducer,
    user: userReducer,
  },
});

export default store;
