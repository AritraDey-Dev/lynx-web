import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isStudent: true,
  username: '',
  password: '',
  studentToken: '',
  tokenFetched: false,
  clubsToken: '',
  clubsTokenFetched: false,
  passResetSuccess: false,
  loading: false,
  error: false,
  errorText: '',
  success: false,
  resendButton: false,
  secondsRemaining: 600,
  timerStatus: 'Stopped',
};

const resetPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState,
  reducers: {
    reset: (state) => {
      state.isStudent = true;
      state.username = '';
      state.password = '';
      state.studentToken = '';
      state.tokenFetched = false;
      state.clubsToken = '';
      state.clubsTokenFetched = false;
      state.passResetSuccess = false;
      state.loading = false;
      state.error = false;
      state.errorText = '';
      state.success = false;
      state.resendButton = false;
      state.secondsRemaining = 600;
      state.timerStatus = 'Stopped';
    },
    setIsStudent: (state, action) => {
      state.isStudent = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setErrorText: (state, action) => {
      state.errorText = action.payload;
    },
    setStudentPassword: (state, action) => {
      state.password = action.payload;
    },
    setStudentToken: (state, action) => {
      state.studentToken = action.payload;
    },
    setStudentTokenFetched: (state, action) => {
      state.tokenFetched = action.payload;
    },
    setClubsToken: (state, action) => {
      state.clubsToken = action.payload;
    },
    setClubsTokenFetched: (state, action) => {
      state.clubsTokenFetched = action.payload;
    },
    setPasswordResetSuccess: (state, action) => {
      state.passResetSuccess = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setResendButton: (state, action) => {
      state.resendButton = action.payload;
    },
    setTimerStatus: (state, action) => {
      state.timerStatus = action.payload;
    },
    setSecondsRemaining: (state, action) => {
      state.secondsRemaining = action.payload;
    },
  },
});

export const {
  reset,
  setIsStudent,
  setUsername,
  setError,
  setErrorText,
  setStudentPassword,
  setStudentToken,
  setStudentTokenFetched,
  setClubsToken,
  setClubsTokenFetched,
  setPasswordResetSuccess,
  setSuccess,
  setLoading,
  setResendButton,
  setTimerStatus,
  setSecondsRemaining,
} = resetPasswordSlice.actions;

export const selectIsStudent = (state) => state.resetPassword.isStudent;
export const selectUsername = (state) => state.resetPassword.username;
export const selectError = (state) => state.resetPassword.error;
export const selectErrorText = (state) => state.resetPassword.errorText;
export const selectStudentPassword = (state) => state.resetPassword.password;
export const selectStudentToken = (state) => state.resetPassword.studentToken;
export const selectStudentTokenFetched = (state) => state.resetPassword.tokenFetched;
export const selectClubsToken = (state) => state.resetPassword.clubsToken;
export const selectClubsTokenFetched = (state) => state.resetPassword.clubsTokenFetched;
export const selectPasswordResetSuccess = (state) => state.resetPassword.passResetSuccess;
export const selectSuccess = (state) => state.resetPassword.success;
export const selectLoading = (state) => state.resetPassword.loading;
export const selectResendButton = (state) => state.resetPassword.resendButton;
export const selectTimerStatus = (state) => state.resetPassword.timerStatus;
export const selectSecondsRemaining = (state) => state.resetPassword.secondsRemaining;

export default resetPasswordSlice.reducer;
