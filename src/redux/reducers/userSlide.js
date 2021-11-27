import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOneUser } from "../../apis/user";
import { getAccessID } from "../../apis/authorityToken";

const id = getAccessID();

console.log(`Id user:${id}`);

export const getUser = createAsyncThunk("user", async () => {
  const apiRes = await getOneUser(id);
  return apiRes;
});

const userReducer = createSlice({
  name: "user",
  initialState: {
    _id: "",
    loading: false,
    isLogin: false,
    username: "",
    email: "",
    role: "",
  },

  reducers: {},

  extraReducers: {
    [getUser.pending]: (state) => {
      return { ...state, loading: true };
    },
    [getUser.fulfilled]: (state, action) => {
      const { _id, username, email, role } = action.payload;

      if (!email) {
        return { ...state, loading: false, isLogin: false };
      }
      return {
        loading: false,
        isLogin: true,
        _id,
        username,
        email,
        role,
      };
    },
  },
});

const { reducer } = userReducer;
export default reducer;
