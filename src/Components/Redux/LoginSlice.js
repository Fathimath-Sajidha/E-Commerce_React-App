
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  isLoggedIn: false
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.userName = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.userName = '';
      state.isLoggedIn = false;
    }
  }
});

export const { setUsername, logout } = loginSlice.actions;

export default loginSlice.reducer;