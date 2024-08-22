import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  department: '',
  address: '',
  aadharNo: '',
  profileImg: '',
  passportImg: {},
  dob: '',
  mobile: '',
  pic: '', // for existing image
  image: {}, // if user uploads a new image
  countryCode: '',
  gender: '',
  datePicker: false,

  error: false,
  errorText: '',
  loading: false,
  success: false,
};

const studentEditProfileSlice = createSlice({
  name: 'studentEditProfile',
  initialState,
  reducers: {
    reset: (state) => {
      state.firstName = '';
      state.lastName = '';
      state.department = '';
      state.address = '';
      state.aadharNo = '';
      state.profileImg = '';
      state.passportImg = {};
      state.dob = '';
      state.mobile = '';
      state.pic = '';
      state.image = {};
      state.datePicker = false;
      state.error = false;
      state.errorText = '';
      state.loading = false;
      state.success = false;
      state.countryCode = '';
      state.gender = '';
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setDepartment: (state, action) => {
      state.department = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setAadhar: (state, action) => {
      state.aadharNo = action.payload;
    },
    setProfileImg: (state, action) => {
      state.profileImg = action.payload;
    },
    setPassportImg: (state, action) => {
      state.passportImg = action.payload;
    },
    setDOB: (state, action) => {
      state.dob = action.payload;
    },
    setMobile: (state, action) => {
      state.mobile = action.payload;
    },
    setPic: (state, action) => {
      state.pic = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setCountryCode: (state, action) => {
      state.countryCode = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setDatePicker: (state, action) => {
      state.datePicker = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setErrorText: (state, action) => {
      state.errorText = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
  },
});

export const {
  reset,
  setFirstName,
  setLastName,
  setDepartment,
  setAddress,
  setAadhar,
  setProfileImg,
  setPassportImg,
  setDOB,
  setMobile,
  setPic,
  setImage,
  setCountryCode,
  setGender,
  setDatePicker,
  setError,
  setErrorText,
  setLoading,
  setSuccess,
} = studentEditProfileSlice.actions;

export const selectFirstName = (state) => state.studentEditProfile.firstName;
export const selectLastName = (state) => state.studentEditProfile.lastName;
export const selectDepartment = (state) => state.studentEditProfile.department;
export const selectAddress = (state) => state.studentEditProfile.address;
export const selectAadhar = (state) => state.studentEditProfile.aadharNo;
export const selectProfileImg = (state) => state.studentEditProfile.profileImg;
export const selectPassportImg = (state) => state.studentEditProfile.passportImg;
export const selectDOB = (state) => state.studentEditProfile.dob;
export const selectMobile = (state) => state.studentEditProfile.mobile;
export const selectPic = (state) => state.studentEditProfile.pic;
export const selectImage = (state) => state.studentEditProfile.image;
export const selectCountryCode = (state) => state.studentEditProfile.countryCode;
export const selectGender = (state) => state.studentEditProfile.gender;
export const selectDatePicker = (state) => state.studentEditProfile.datePicker;
export const selectError = (state) => state.studentEditProfile.error;
export const selectErrorText = (state) => state.studentEditProfile.errorText;
export const selectLoading = (state) => state.studentEditProfile.loading;
export const selectSuccess = (state) => state.studentEditProfile.success;

export default studentEditProfileSlice.reducer;
