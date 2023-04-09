import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import getAllProductsSlice from "./allProducts.slice";
import addToCartSlice from "./addToCart.slice";

const store = configureStore({
  reducer: {
    getAllProductsSlice: getAllProductsSlice.reducer,
    addToCartSlice: addToCartSlice.reducer,
  },
  middleware: [logger],
});
export default store;
