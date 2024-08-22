import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  splashLoading: true,
};

const authNavSlice = createSlice({
  name: 'authNav',
  initialState,
  reducers: {
    reset: (state) => {
      state.splashLoading = true;
    },
    setSplashLoading: (state, action) => {
      state.splashLoading = action.payload;
    },
  },
});

export const { reset, setSplashLoading } = authNavSlice.actions;

export const selectSplashLoading = (state) => state.authNav.splashLoading;

export default authNavSlice.reducer;
