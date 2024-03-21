import { createSlice } from '@reduxjs/toolkit'

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    auths: ['/home', '/dataView', '/map'],
    isLogin: true
  },
  reducers: {
    setUserInfo: (state, action) => {
      console.log(state);
      console.log(action);
    }
  }
})

export default userInfoSlice.reducer