import { createSlice } from '@reduxjs/toolkit';
import { getUser, postLogin } from '../action/Login.reducer';
import { ILoginState, IUserState } from '../Interface/LoginInterface';

interface ILoginSlice {
  loading: boolean;
  login?: ILoginState;
  isLoggedIn?: boolean;
  user?: IUserState;
}

const initialState: ILoginSlice = {
  isLoggedIn: false,
  loading: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: ( builder ) => {
    builder
      .addCase( postLogin.pending, ( state ) => {
        state.loading = true;
      })
      .addCase( postLogin.fulfilled, ( state, action ) => {
        state.loading = false;
        state.isLoggedIn = true;
        localStorage.setItem( 'id', action.payload?.id!.toString());
        state.user = action.payload;
      })
      .addCase( postLogin.rejected, ( state ) => {
        state.isLoggedIn = false;
        state.loading = false;
      });
    builder
      .addCase( getUser.pending, ( state ) => {
        state.loading = true;
      })
      .addCase( getUser.fulfilled, ( state, action ) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase( getUser.rejected, ( state ) => {
        state.isLoggedIn = false;
        state.loading = false;
      });
  },
});

export default loginSlice.reducer;
