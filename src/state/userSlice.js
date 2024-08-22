import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const initialState = {
  userName: '',
  userType: '',
  userRollNumber: '',
  userToken: '',
  userRegToken: '',
  redirectUpdate: false,
  lynxGPT: 'NULL',
  uniqueID: '',
  firebaseToken: '',
  refreshToken: '',
  clubId: '',
  appLoaded: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: (state) => {
      state.userName = '';
      state.userType = '';
      state.userRollNumber = '';
      state.userToken = '';
      state.userRegToken = '';
      state.redirectUpdate = false;
      state.uniqueID = '';
      state.clubId = '';
      state.refreshToken = '';
      state.appLoaded = false;
    },
    setUserRollNumber: (state, action) => {
      state.userRollNumber = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    setClubId: (state, action) => {
      state.clubId = action.payload;
    },
    setUniqueId: (state, action) => {
      state.uniqueID = action.payload;
    },
    setFirebaseToken: (state, action) => {
      state.firebaseToken = action.payload;
    },
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
    setUserRegToken: (state, action) => {
      state.userRegToken = action.payload;
    },
    setRedirectUpdate: (state, action) => {
      state.redirectUpdate = action.payload;
    },
    setAppLoaded: (state, action) => {
      state.appLoaded = action.payload;
    },
    setLynxgpt: (state, action) => {
      state.lynxGPT = action.payload;
    },
  },
});

export const {
  reset,
  setUserRollNumber,
  setRefreshToken,
  setClubId,
  setUniqueId,
  setFirebaseToken,
  setUserType,
  setUserToken,
  setUserRegToken,
  setRedirectUpdate,
  setAppLoaded,
  setLynxgpt,
} = userSlice.actions;

export const selectUserRollNumber = (state) => state.user.userRollNumber;
export const selectRefreshToken = (state) => state.user.refreshToken;
export const selectClubId = (state) => state.user.clubId;
export const selectUniqueId = (state) => state.user.uniqueID;
export const selectFirebaseToken = (state) => state.user.firebaseToken;
export const selectUserType = (state) => state.user.userType;
export const selectUserToken = (state) => state.user.userToken;
export const selectUserRegToken = (state) => state.user.userRegToken;
export const selectRedirectUpdate = (state) => state.user.redirectUpdate;
export const selectAppLoaded = (state) => state.user.appLoaded;
export const selectLynxgpt = (state) => state.user.lynxGPT;

export default userSlice.reducer;
