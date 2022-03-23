/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getUserDirectoryHttp } from '../Controllers/UserControllers';

export const getUserDirectory = createAsyncThunk(
  'userDirectory/getUserDirectory',
  async ( _, thunkAPI ) => {
    try {
      const response = await getUserDirectoryHttp( );
      return response;
    } catch ( error:any ) {
      console.log( error.response.data.message );
      toast.warning( error.response.data.message );
      return thunkAPI.rejectWithValue( true );
    }
  },
);
