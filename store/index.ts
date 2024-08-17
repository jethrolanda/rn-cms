import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./reducer/blogSlice";

const store = configureStore({
  reducer: {
    blogState: blogReducer
  }
});

export default store;

export type IRootState = ReturnType<typeof store.getState>;
