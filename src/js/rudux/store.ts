// store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer, // Add more reducers if needed
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store;
