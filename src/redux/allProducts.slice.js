import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: {},
};

const getAllProductsSlice = createSlice({
  name: "get all products",
  initialState,
  reducers: {
    getAllProductsRedux: (state, { paylaod }) => {
      console.log("allProducts py", paylaod);
      return state.allProducts = paylaod;
    },
  },
});
export const { getAllProductsRedux } = getAllProductsSlice.actions;
export default getAllProductsSlice;
