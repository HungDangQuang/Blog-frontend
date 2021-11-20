import { createSlice } from "@reduxjs/toolkit";

const postReducer = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      // const newPhoto = action.payload;
      state.push(...action.payload);
    },
    removePost: (state, action) => {
      console.log(action.payload);
      const removePostId = action.payload;
      return state.filter((post) => post.id !== removePostId);
    },
    updatePost: (state, action) => {
      const newPost = action.payload;
      const postIndex = state.findIndex((post) => post.id === newPost.id);

      if (postIndex >= 0) {
        state[postIndex] = newPost;
      }
    },
  },
});

const { reducer, actions } = postReducer;
export const { addPost, removePost, updatePost } = actions;
export default reducer;
