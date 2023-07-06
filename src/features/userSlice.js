import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUserType: localStorage.getItem('currentUserType') || '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUserType: (state, action) => {
      state.currentUserType = action.payload;
      localStorage.setItem('currentUserType', action.payload);
    },
  },
});

export const { setCurrentUserType } = userSlice.actions;

export default userSlice.reducer;