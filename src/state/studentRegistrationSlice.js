import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countryCode: '91', // index of default i.e., India in Database
  mobile: '',
  firstName: '',
  secondName: '',
  department: 'Department',
  birthDay: new Date('January 1, 2000 00:00:00'),
  gender: 'Gender',
  nationality: 'India',
  address: '',
  aadhar: '',
  passport: null,
  profilePic: '',
  password: '',
  confirmPassword: '',
  modalVisible: false,
  dateSelected: false,
  departmentId: '',

  apiSuccess: false,
  apiCall: false,
  apiErrorText: '',
  apiError: false,
  apiResponse: {},
};

const studentRegistrationSlice = createSlice({
  name: 'studentRegistration',
  initialState,
  reducers: {
    reset: (state) => {
      state.apiResponse = {};
      state.apiSuccess = false;
      state.apiCall = false;
      state.apiErrorText = '';
      state.apiError = false;
      state.countryCode = '91';
      state.mobile = '';
      state.firstName = '';
      state.secondName = '';
      state.department = 'Department';
      state.birthDay = new Date('January 1, 2000 00:00:00');
      state.gender = 'Gender';
      state.nationality = 'India';
      state.address = '';
      state.aadhar = '';
      state.passport = null;
      state.profilePic = '';
      state.password = '';
      state.confirmPassword = '';
      state.modalVisible = false;
      state.dateSelected = false;
      state.departmentId = '';
    },
    setApiResponse: (state, action) => {
      state.apiResponse = action.payload;
    },
    setApiError: (state, action) => {
      state.apiError = action.payload;
    },
    setApiErrorText: (state, action) => {
      state.apiErrorText = action.payload;
    },
    setApiCall: (state, action) => {
      state.apiCall = action.payload;
    },
    setApiSuccess: (state, action) => {
      state.apiSuccess = action.payload;
    },
    setPicture: (state, action) => {
      state.profilePic = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setAadhar: (state, action) => {
      state.aadhar = action.payload;
    },
    setPassport: (state, action) => {
      state.passport = action.payload;
    },
    setBirthDay: (state, action) => {
      state.birthDay = action.payload;
    },
    setDateSelected: (state, action) => {
      state.dateSelected = action.payload;
    },
    setDepartment: (state, action) => {
      state.department = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.secondName = action.payload;
    },
    setCountryCode: (state, action) => {
      state.countryCode = action.payload;
    },
    setMobileNumber: (state, action) => {
      state.mobile = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setNationality: (state, action) => {
      state.nationality = action.payload;
    },
    toggleModalVisible: (state) => {
      state.modalVisible = !state.modalVisible;
    },
    setDepartmentId: (state, action) => {
      state.departmentId = action.payload;
    },
  },
});

export const {
  reset,
  setApiResponse,
  setApiError,
  setApiErrorText,
  setApiCall,
  setApiSuccess,
  setPicture,
  setPassword,
  setConfirmPassword,
  setAddress,
  setAadhar,
  setPassport,
  setBirthDay,
  setDateSelected,
  setDepartment,
  setFirstName,
  setLastName,
  setCountryCode,
  setMobileNumber,
  setGender,
  setNationality,
  toggleModalVisible,
  setDepartmentId,
} = studentRegistrationSlice.actions;

export const selectApiResponse = (state) => state.studentRegistration.apiResponse;
export const selectApiError = (state) => state.studentRegistration.apiError;
export const selectApiErrorText = (state) => state.studentRegistration.apiErrorText;
export const selectApiCall = (state) => state.studentRegistration.apiCall;
export const selectApiSuccess = (state) => state.studentRegistration.apiSuccess;
export const selectPicture = (state) => state.studentRegistration.profilePic;
export const selectPassword = (state) => state.studentRegistration.password;
export const selectConfirmPassword = (state) => state.studentRegistration.confirmPassword;
export const selectAddress = (state) => state.studentRegistration.address;
export const selectAadhar = (state) => state.studentRegistration.aadhar;
export const selectPassport = (state) => state.studentRegistration.passport;
export const selectBirthDay = (state) => state.studentRegistration.birthDay;
export const selectDateSelected = (state) => state.studentRegistration.dateSelected;
export const selectDepartment = (state) => state.studentRegistration.department;
export const selectFirstName = (state) => state.studentRegistration.firstName;
export const selectLastName = (state) => state.studentRegistration.secondName;
export const selectCountryCode = (state) => state.studentRegistration.countryCode;
export const selectMobileNumber = (state) => state.studentRegistration.mobile;
export const selectGender = (state) => state.studentRegistration.gender;
export const selectNationality = (state) => state.studentRegistration.nationality;
export const selectModalVisible = (state) => state.studentRegistration.modalVisible;
export const selectDepartmentId = (state) => state.studentRegistration.departmentId;

export default studentRegistrationSlice.reducer;
