import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: {},
  error: {},
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    request: (state) => {
      state.loading = true;
      state.error = {};
      state.isAuth = false;
    },
    success: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isAuth = true;
    },
    error: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuth = false;
    },
    logout: (state) => {
      state.loading = false;
      state.data = {};
      state.error = {};
      state.isAuth = false;
    },
  },
});

export default authSlice.reducer;
