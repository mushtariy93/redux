import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user-slice";
import token from "./slices/token-slice";
const store = configureStore({
  reducer: {
    counter: user,
    token,
  },
});

export default store;
