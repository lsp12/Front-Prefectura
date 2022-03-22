/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getUserLogg, login } from '../Controllers/Login.controllers';
import { ILoginState } from '../Interface/LoginInterface';

export const postLogin = createAsyncThunk(
  'login/postLogin',
  async ( payload: ILoginState, thunkAPI ) => {
    try {
      const response = await login( payload );
      toast.success( 'Login Successful' );
      return response;
    } catch ( error:any ) {
      toast.error( 'Login Failed' );
      console.log( error.response.data.message );
      toast.warning( error.response.data.message );
      return thunkAPI.rejectWithValue( true );
    }
  },
);

export const getUser = createAsyncThunk(
  'login/getUser',
  async ( _, thunkAPI ) => {
    try {
      const id = localStorage.getItem( 'id' );
      const response = await getUserLogg( id! );
      toast.success( 'Login Successful' );
      return response;
    } catch ( error:any ) {
      toast.error( 'Login Failed' );
      console.log( error.response.data.message );
      toast.warning( error.response.data.message );
      return thunkAPI.rejectWithValue( true );
    }
  },
);
