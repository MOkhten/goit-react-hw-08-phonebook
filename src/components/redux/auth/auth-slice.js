import { createSlice } from '@reduxjs/toolkit';

import { registerUser, loginUser, logOut } from './auth-operations';

const initialState = {
  contact: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    // [authOperations.fetchCurrentUser.fulfilled](state, action) {
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    // },
  }, 
});

// export default authSlice.reducer;
export const authReducer = authSlice.reducer;