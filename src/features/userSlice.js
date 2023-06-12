import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  id:'',
  name:'',
  mobileNumber:'',
  email:''
  
}

const userSlice = createSlice({
    name: 'user_info',
    initialState,
    reducers: {
      setUserInfo: (state, action ) => {
        state.id=action.payload.id;
        state.name=action.payload.name;
        state.mobileNumber = action.payload.mobileNumber;
        state.email=action.payload.email;
      },
      unsetUserInfo: (state) => {
        state.id=''
        state.name=''
        state.mobileNumber=''
        state.email=''
      },
    },
  });

  export const { setUserInfo,unsetUserInfo} = userSlice.actions;
  export default userSlice.reducer;