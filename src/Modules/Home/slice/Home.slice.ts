import { createSlice } from '@reduxjs/toolkit';

interface IHomeState{
  loading: boolean;
  slider:boolean;
}

const initialState: IHomeState = {
  loading: false,
  slider: false,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setSlider: ( state, action ) => {
      state.slider = action.payload;
    },
  },
  extraReducers: {},
});

export const { setSlider } = homeSlice.actions;
export default homeSlice.reducer;
