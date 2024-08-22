import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tabVisibility: true,
};

const bottomNavSlice = createSlice({
  name: 'bottomNav',
  initialState,
  reducers: {
    reset: (state) => {
      state.tabVisibility = true;
    },
    setTabVisibility: (state, action) => {
      state.tabVisibility = action.payload;
    },
  },
});

export const { reset, setTabVisibility } = bottomNavSlice.actions;

export const selectTabVisibility = (state) => state.bottomNav.tabVisibility;

export default bottomNavSlice.reducer;
