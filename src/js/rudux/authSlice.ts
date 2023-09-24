// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: window == undefined ?null: JSON.parse(localStorage.getItem('auth-token')),
};

const authSlice = createSlice({
  name: 'auth-token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
    window == undefined ? null:localStorage.setItem('auth-token', JSON.stringify(action.payload)) ;
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
