// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const windowOn = window == undefined

const haveData = (key:string) => localStorage.getItem(key) !== undefined



interface userData{
  email:string
  name:string
  favorites:string[]
  comments:string[]
}

interface AuthState {
  token: string | null;
  userData:userData | null;
}

const initialState: AuthState = {
  token: windowOn && haveData('auth-token')?null: JSON.parse(localStorage.getItem('auth-token')),
  userData:windowOn && haveData('userData')?null: JSON.parse(localStorage.getItem('userData')),
};

const authSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
    windowOn ? null:localStorage.setItem('auth-token', JSON.stringify(action.payload)) 
    
    state.token = action.payload;
    },
    setUserData: (state, action: PayloadAction<userData | null>) => {
      windowOn? null:localStorage.setItem('user-data', JSON.stringify(action.payload))

      state.userData = action.payload
    },
  },
});



export const { setToken } = authSlice.actions;

export default authSlice.reducer;
