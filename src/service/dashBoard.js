import axios from "axios";
import { apiEndpoints } from "./apiEndPoint";

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
