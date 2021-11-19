import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("user/getUser", () => {});

const userSlice = createSlice({
  name: "user",

  initialState: {
    loading: false,
    isLogin: false,
    name: "",
    avatar: "",
    email: "",
  },

  reducers: {
    // standard reducer logic, with auto-generated action types per reduce
  },
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      const { name, email, avatar } = action.payload;
      if (!email) {
        return { ...state, loading: false, isLogin: false };
      }
      return {
        loading: false,
        isLogin: true,
        name,
        email,
        avatar,
      };
    },
  },
});

const { reducer } = userSlice;
export default reducer;
