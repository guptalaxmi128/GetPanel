import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUserType: '',
  },
  reducers: {
    setCurrentUserType: (state, action) => {
      state.currentUserType = action.payload;
    },
  },
});

export const { setCurrentUserType } = userSlice.actions;

export default userSlice.reducer;