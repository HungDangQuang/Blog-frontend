import { createSlice } from "@reduxjs/toolkit";

const alterReducer = createSlice({
  name: "message",
  initialState: {
    open: false,
    message: "",
    type: "",
    loading: false,
  },
  reducers: {
    setMessage(state, { payload }) {
      return { ...state, open: true, ...payload };
    },

    setLoading(state, { payload }) {
      state.loading = payload;
    },

    closeMessage(state) {
      state.open = false;
    },
  },
});

const { reducer, actions } = alterReducer;
export const { setMessage, closeMessage, setLoading } = actions;
export default reducer;
