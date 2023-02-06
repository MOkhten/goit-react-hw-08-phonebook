import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    try {
      const responсe = await axios.post('/users/login', credentials);
      setAuthHeader(responсe.data.token);
      return responсe.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (credentials, thunkAPI) => {
    try {
      const responсe = await axios.post('/users/signup', credentials);
      setAuthHeader(responсe.data.token);
      return responсe.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
     clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
    }
});

const operations = {
  registerUser,
  logOut,
  loginUser,
  // fetchCurrentUser,
};
export default operations;