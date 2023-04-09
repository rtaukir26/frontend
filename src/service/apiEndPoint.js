import { BASE_API_URL } from "../envConfig";
export const apiEndpoints = {
  login:`${BASE_API_URL}/login`,
  allProducts: `${BASE_API_URL}/products`,
  singleProduct:`${BASE_API_URL}/product`,
  addProduct:`${BASE_API_URL}/add-product`,
  singleCartProduct:`${BASE_API_URL}/cart-product`,
  allSelecedProducts:`${BASE_API_URL}/get-all-selected-products`,
};
