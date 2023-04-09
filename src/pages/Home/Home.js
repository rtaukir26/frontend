import React, { useEffect, useState } from "react";
import Header from "../../component/Header/Header";
import Products from "../../component/Products.js/Products";
import { getAllProductsApi } from "../../service/dashBoard";

const Home = () => {
  const [allProductsApi, setAllProductsApi] = useState({
    loading: true,
    Products: {},
    error: "",
  });

  useEffect(() => {
    getAllProductsApi()
      .then((res) => {
        if (res?.status === 200) {
          const newData = res?.data?.products.map((item) => {
            return { ...item, quantity: 1 };
          });
          setAllProductsApi({
            loading: false,
            Products: newData,
            error: "",
          });
          // dispatch(getAllProductsRedux(res));
        } else {
          setAllProductsApi({
            loading: true,
            Products: [],
            // error: res.message,
            error: "Network Error",
          });
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="main_sec">
      <div className="body_outer_div">
        <div className="body_inner_div">
          <Header />
          <Products allProductsApi={allProductsApi} />
        </div>
      </div>
    </section>
  );
};

export default Home;
