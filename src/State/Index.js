import { configureStore } from "@reduxjs/toolkit";
import posts from "./PostSlice";
import auth from "./AuthSlice";

const store = configureStore({
  reducer: { posts, auth },
});
export default store;
