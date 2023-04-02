import Header from "../../component/Header/Header";
// import RatingStar from "../../component/RatingStar/RatingStar";
// import watchImg from "../../assets/images/watch.webp";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleProductApi } from "../../service/dashBoard";
import ProductCard from "../../component/ProductCard/ProductCard";

const SingleProduct = () => {
  const [productInfo, setProductInfo] = useState({
    loading: true,
    error: "",
    product: {},
  });
  const { id } = useParams();

  useEffect(() => {
    getSingleProductApi(id)
      .then((res) => {
        // console.log("productInfo res", res);
        if (res?.status === 200) {
          setProductInfo({
            loading: false,
            product: { ...res?.data?.product, quantities: 1 },
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
        // console.log("err",err);
      });
    // below line stoping the warning of "React Hook useEffect has a missing dependency"
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("productInfo", productInfo);

  return (
    <section className="main_sec">
      <div className="body_outer_div">
        <div className="body_inner_div">
          <Header />
          <ProductCard
            setProductInfo={setProductInfo}
            productInfo={productInfo}
          />
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
