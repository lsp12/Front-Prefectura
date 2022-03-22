import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../../Modules/Login/slice/login.slice';

export const Store = configureStore({
  reducer: {
    login: loginSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
