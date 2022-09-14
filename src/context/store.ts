import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import food from "./food";
import basket from "./basket";

export default configureStore({
  reducer: {
    auth,
    food,
    basket,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
