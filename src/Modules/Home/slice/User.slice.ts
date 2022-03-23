import { createSlice } from '@reduxjs/toolkit';
import { getUserDirectory } from '../Action/User.Reducer';
import { IUser } from '../interface/UserInterface';

interface IUserStateSlice {
  loading: boolean;
  users: IUser[] ;
}

const initialState: IUserStateSlice = {
  loading: false,
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: ( builder ) => {
    builder
      .addCase( getUserDirectory.pending, ( state ) => {
        state.loading = true;
      })
      .addCase( getUserDirectory.fulfilled, ( state, action ) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase( getUserDirectory.rejected, ( state ) => {
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
