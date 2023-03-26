import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import getAllProductsSlice from "./allProducts.slice";

const store = configureStore({
  reducer: {
    getAllProductsSlice: getAllProductsSlice.reducer,
  },
  middleware: [logger],
});
export default store;
