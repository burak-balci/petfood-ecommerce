import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  food: [],
};

const foods = createSlice({
  name: "foods",
  initialState,
  reducers: {
    updateFoods: (state: any, action: any) => {
      state.food = [...state.food, action.payload];
    },
    clearFoods: (state) => {
      state.food = [];
    },
  },
});

export const { updateFoods, clearFoods } = foods.actions;
export default foods.reducer;
