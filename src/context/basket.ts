import { createSlice } from "@reduxjs/toolkit";
import { Basket } from "../types";

const initialState = {
  basketItems: <Basket[]>[],
};

const basket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.basketItems = action.payload;
    },
    appendItem: (state, action) => {
      state.basketItems = [...state.basketItems, action.payload];
    },
    clearBasket: (state) => {
      state.basketItems = [];
    },
  },
});

export const { setItems, appendItem, clearBasket } = basket.actions;
export default basket.reducer;
