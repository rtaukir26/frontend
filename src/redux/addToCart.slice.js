import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  product: {},
  error: "",
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    getAddToCartAllProductsRedux: (state, { payload }) => {
      if (payload?.status === 200) {
        return {
          ...state,
          loading: false,
          error: "",
          product: payload?.data,
        };
      } else if (payload?.message === "Network Error") {
        return {
          ...state,
          loading: true,
          error: "Network Error. Please try after sometime.",
          product: {},
        };
      } else {
        return {
          ...state,
          loading: true,
          error: "Something went wrong.",
          product: {},
        };
      }
    },
  },
});

export const { getAddToCartAllProductsRedux } = addToCartSlice.actions;
export default addToCartSlice;
