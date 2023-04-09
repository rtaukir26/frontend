import axios from "axios";
import { apiEndpoints } from "./apiEndPoint";

export const loginUser = async (userInputValue) => {
  try {
    return await axios.post(
      apiEndpoints.login,
      {
        email: userInputValue.email,
        password: userInputValue.password,
      },
      {
        headers: {
          "Content-type": "Application/json",
        },
      }
    );
  } catch (err) {
    return err;
  }
};

export const getAllProductsApi = async () => {
  // let access_token = JSON.parse(localStorage.getItem("access_token"));
  try {
    return await axios.get(
      apiEndpoints.allProducts

      //   { headers: { Authorization: `Bearer ${access_token}` } }
    );
  } catch (error) {
    //    return responseErrorHandler(error);
    return error;
  }
};
export const getSingleProductApi = async (productId) => {
  try {
    return await axios.get(`${apiEndpoints.singleProduct}/${productId}`);
  } catch (error) {
    return error;
  }
};

//add to cart product
export const addToCartProductApi = async (item) => {
  try {
    return await axios.post(apiEndpoints.addProduct, item);
  } catch (error) {
    return error;
  }
};
//get single product from add to cart
export const getSingleCartProduct = async (id) => {
  try {
    return await axios.get(`${apiEndpoints.singleCartProduct}/${id}`);
  } catch (error) {
    return error;
  }
};

//get all products from add to cart
export const getAllSelecedProducts = async () => {
  try {
    return await axios.get(apiEndpoints.allSelecedProducts);
  } catch (error) {
    return error;
  }
};

//Incr qty & update in add to cart
export const updateCartProductsApi = async (id, updateProduct) => {
  try {
    return await axios.put(
      `${apiEndpoints.singleCartProduct}/${id}`,
      updateProduct
    );
  } catch (error) {
    return error;
  }
};
