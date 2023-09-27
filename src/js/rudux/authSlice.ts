// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const windowOn = window == undefined

const notHaveData = (key:string) => localStorage.getItem(key) !== undefined && localStorage.getItem(key) !== null;



interface userData{
  email:string
  name:string
  favorites:string[]
  comments:string[]
}

interface AuthState {
  token: string | null;
  userData:userData | null;
  isLogged:boolean;
}


const initialState: AuthState = {
  token: windowOn && notHaveData('auth-token')?null: JSON.parse(localStorage.getItem('auth-token')),
  userData:windowOn && notHaveData('user-data')?null: JSON.parse(localStorage.getItem('user-data')),
  isLogged: notHaveData('auth-token'),
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

    const user = {
      ...action.payload,
      favorites: action.payload?.favorites.map((item) => JSON.parse(item))
    }

    windowOn? null:localStorage.setItem('user-data', JSON.stringify(user))
    
    state.isLogged = true
      state.userData = user
    },
    logOut: (state, action: PayloadAction<boolean>) => {
      windowOn? null:localStorage.removeItem('user-data')
      windowOn? null:localStorage.removeItem('auth-token')
      state.isLogged = false
      state = initialState
    },
  },
});



export const { setToken,setUserData,logOut } = authSlice.actions;

export default authSlice.reducer;
