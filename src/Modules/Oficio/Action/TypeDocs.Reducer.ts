/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getTypeDocsHttp } from '../Controllers/TypeDocs';

export const GetTypeDocs = createAsyncThunk(
  'typeDocs/getTypeDocs',
  async ( _, thunk ) => {
    try {
      const response = await getTypeDocsHttp();
      return response;
    } catch ( error:any ) {
      console.log( error.response.data.message );
      toast.warning( error.response.data.message );
      return thunk.rejectWithValue( true );
    }
  },
);
