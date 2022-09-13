import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import food from "./food";

export default configureStore({
  reducer: {
    auth,
    food,
  },
});
