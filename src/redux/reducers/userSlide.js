import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("user/getUser", async () => {});
const userSlice = createSlice({
  name: "user",

  initialState: {
    loading: false,
    isLogin: false,
    username: "",
    avatar: "",
    email: "",
  },

  reducers: {
    // standard reducer logic, with auto-generated action types per reduce
  },
  extraReducers: {
    [getUser.pending]: (state) => {
      return { ...state, loading: true };
    },
    [getUser.fulfilled]: (state, action) => {
      const { username, email, avatar } = action.payload;
      if (!email) {
        return { ...state, loading: false, isLogin: false };
      }
      return {
        loading: false,
        isLogin: true,
        username,
        email,
        avatar,
      };
    },
  },
});

const { reducer } = userSlice;
export default reducer;
