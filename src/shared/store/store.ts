import { configureStore } from '@reduxjs/toolkit';
import HomeSlice from '../../Modules/Home/slice/Home.slice';
import UserSlice from '../../Modules/Home/slice/User.slice';
import loginSlice from '../../Modules/Login/slice/login.slice';
import DocsGenerateSlice from '../../Modules/Oficio/slice/DocsGenerate.slice';

export const Store = configureStore({
  reducer: {
    login: loginSlice,
    docs: DocsGenerateSlice,
    home: HomeSlice,
    user: UserSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
