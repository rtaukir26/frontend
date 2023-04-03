import { useEffect, useState } from "react";
import Header from "../../component/Header/Header";
import { getAllSelecedProducts } from "../../service/dashBoard";
import SelectedProductCard from "../../component/SelectedProductCard/SelectedProductCard";

const AddToCart = () => {
  const [productInfo, setProductInfo] = useState({
    loading: true,
    error: "",
    product: {},
  });

  //getting selected products thro' api
  useEffect(() => {
    getAllSelecedProducts()
      .then((res) => {
        if (res?.status === 200) {
          // console.log("res",res)
          setProductInfo({
            loading: false,
            // product: { ...res?.data?.product, quantities: 1 },
            product: res?.data,
            error: "",
          });
        } else if (res?.message === "Network Error") {
          setProductInfo({
            loading: true,
            product: {},
            error: "Network Error",
          });
        } else {
          setProductInfo({
            loading: true,
            product: {},
            error: "Something went wrong!",
          });
        }
      })
      .catch((err) => {
        return err;
      });
    // below line stoping the warning of "React Hook useEffect has a missing dependency"
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log("productInfo",productInfo)

  return (
    <section className="main_sec">
      <div className="body_outer_div">
        <div className="body_inner_div">
          {/* <div className="product_details_div"> */}
            <Header />
            <SelectedProductCard
              setProductInfo={setProductInfo}
              productInfo={productInfo}
            />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default AddToCart;
