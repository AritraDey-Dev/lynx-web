import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: false,
  errorText: '',
  loading: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    reset: (state) => {
      state.error = false;
      state.errorText = '';
      state.loading = false;
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
  },
});

export const { reset, setError, setErrorText, setLoading } = loginSlice.actions;

export const selectError = (state) => state.login.error;
export const selectErrorText = (state) => state.login.errorText;
export const selectLoading = (state) => state.login.loading;

export default loginSlice.reducer;
