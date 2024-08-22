import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rollNumber: '',
  firstName: '',
  lastName: '',
  department: '',
  dob: '',
  mobileNo: '',
  aadhar: '',
  address: '',
  profilePic: '',
  interestList: [],
  clubsFollowingList: [],
  studentId: '',
  countryCode: '',
  gender: '',
  isLoading: false,
  isError: false,
  errorText: '',
  refresh: false,
  clubPageShow: true,
};

const studentDetailsSlice = createSlice({
  name: 'studentDetails',
  initialState,
  reducers: {
    reset: (state) => {
      state.rollNumber = '';
      state.firstName = '';
      state.lastName = '';
      state.department = '';
      state.dob = '';
      state.mobileNo = '';
      state.aadhar = '';
      state.address = '';
      state.profilePic = '';
      state.interestList = [];
      state.clubsFollowingList = [];
      state.studentId = '';
      state.countryCode = '';
      state.gender = '';
      state.isLoading = false;
      state.isError = false;
      state.errorText = '';
      state.refresh = false;
      state.clubPageShow = true;
    },
    setDetails: (state, action) => {
      const details = action.payload;
      state.rollNumber = details.roll_no;
      state.firstName = details.first_name;
      state.lastName = details.last_name;
      state.department = details.department;
      state.dob = details.dob;
      state.mobileNo = details.mobile_no;
      state.aadhar = details.aadhar;
      state.address = details.address;
      state.profilePic = details.profile_pic;
      state.studentId = details.id;
      state.countryCode = details.countryCode;
      state.gender = details.gender;
    },
    setRollNumber: (state, action) => {
      state.rollNumber = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
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
    setDob: (state, action) => {
      state.dob = action.payload;
    },
    setMobileNo: (state, action) => {
      state.mobileNo = action.payload;
    },
    setAadhar: (state, action) => {
      state.aadhar = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setProfilePic: (state, action) => {
      state.profilePic = action.payload;
    },
    setClubs: (state, action) => {
      state.clubsFollowingList = action.payload;
    },
    setInterests: (state, action) => {
      state.interestList = action.payload;
    },
    setErrorText: (state, action) => {
      state.errorText = action.payload;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setRefresh: (state, action) => {
      state.refresh = action.payload;
    },
    toggleClubSubscription: (state, action) => {
      const clubId = action.payload;
      state.clubsFollowingList = state.clubsFollowingList.map((item) => {
        if (item.clubId._id === clubId) {
          return { ...item, isSubscribed: !item.isSubscribed };
        }
        return item;
      });
    },
    addFollowingClub: (state, action) => {
      state.clubsFollowingList.push(action.payload);
    },
    removeFollowingClub: (state, action) => {
      state.clubsFollowingList = state.clubsFollowingList.filter(
        (club) => club !== action.payload
      );
    },
    addInterestedEvent: (state, action) => {
      state.interestList.push(action.payload);
    },
    removeInterestedEvent: (state, action) => {
      state.interestList = state.interestList.filter(
        (event) => event !== action.payload
      );
    },
    setClubPageShow: (state, action) => {
      state.clubPageShow = action.payload;
    },
  },
});

export const {
  reset,
  setDetails,
  setRollNumber,
  setGender,
  setFirstName,
  setLastName,
  setDepartment,
  setDob,
  setMobileNo,
  setAadhar,
  setAddress,
  setProfilePic,
  setClubs,
  setInterests,
  setErrorText,
  setIsError,
  setIsLoading,
  setRefresh,
  toggleClubSubscription,
  addFollowingClub,
  removeFollowingClub,
  addInterestedEvent,
  removeInterestedEvent,
  setClubPageShow,
} = studentDetailsSlice.actions;

export const selectStudentDetails = (state) => state.studentDetails;
export const selectFirstName = (state) => state.studentDetails.firstName;
export const selectLastName = (state) => state.studentDetails.lastName;
export const selectRollNo = (state) => state.studentDetails.rollNumber;
export const selectMobileNo = (state) => state.studentDetails.mobileNo;
export const selectDepartment = (state) => state.studentDetails.department;
export const selectDob = (state) => state.studentDetails.dob;
export const selectAadhar = (state) => state.studentDetails.aadhar;
export const selectAddress = (state) => state.studentDetails.address;
export const selectProfilePic = (state) => state.studentDetails.profilePic;
export const selectInterests = (state) => state.studentDetails.interestList;
export const selectClubs = (state) => state.studentDetails.clubsFollowingList;
export const selectIsLoading = (state) => state.studentDetails.isLoading;
export const selectIsError = (state) => state.studentDetails.isError;
export const selectErrorText = (state) => state.studentDetails.errorText;
export const selectRefresh = (state) => state.studentDetails.refresh;
export const selectStudentId = (state) => state.studentDetails.studentId;
export const selectCountryCode = (state) => state.studentDetails.countryCode;
export const selectClubPageShow = (state) => state.studentDetails.clubPageShow;
export const selectGender = (state) => state.studentDetails.gender;

export default studentDetailsSlice.reducer;
