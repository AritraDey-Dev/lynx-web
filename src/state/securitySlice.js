import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: [],
  error: false,
  errorText: '',
  refreshing: false,
};

const securitySlice = createSlice({
  name: 'security',
  initialState,
  reducers: {
    reset: (state) => {
      state.error = false;
      state.errorText = '';
      state.data = [];
      state.loading = false;
      state.refreshing = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setErrorText: (state, action) => {
      state.errorText = action.payload;
    },
    setRefreshing: (state, action) => {
      state.refreshing = action.payload;
    },
  },
});

export const {
  reset,
  setLoading,
  setData,
  setError,
  setErrorText,
  setRefreshing,
} = securitySlice.actions;

export const selectLoading = (state) => state.security.loading;
export const selectData = (state) => state.security.data;
export const selectError = (state) => state.security.error;
export const selectErrorText = (state) => state.security.errorText;
export const selectRefreshing = (state) => state.security.refreshing;

export default securitySlice.reducer;
