import { createSlice } from '@reduxjs/toolkit';
import { GetTypeDocs } from '../Action/TypeDocs.Reducer';
import { ITypeDocs } from '../interface/DocsGenerate';

interface IDocsGenerateState{
  Typedocs: ITypeDocs[];
  loading: boolean;
}

const initialState: IDocsGenerateState = {
  Typedocs: [],
  loading: false,
};

const docsGenerateSlice = createSlice({
  name: 'docsGenerate',
  initialState,
  reducers: {},
  extraReducers: ( builder ) => {
    builder
      .addCase( GetTypeDocs.pending, ( state ) => {
        state.loading = true;
      })
      .addCase( GetTypeDocs.fulfilled, ( state, action ) => {
        state.loading = false;
        state.Typedocs = action.payload;
      })
      .addCase( GetTypeDocs.rejected, ( state ) => {
        state.loading = false;
      });
  },
});

export default docsGenerateSlice.reducer;
