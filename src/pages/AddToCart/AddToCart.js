import { useEffect } from "react";
import Header from "../../component/Header/Header";
import { getAllSelecedProducts } from "../../service/dashBoard";
import SelectedProductCard from "../../component/SelectedProductCard/SelectedProductCard";
import { getAddToCartAllProductsRedux } from "../../redux/addToCart.slice";
import { useDispatch, useSelector } from "react-redux";

const AddToCart = () => {

  const dispatch = useDispatch();
  const productInfo = useSelector((state) => state?.addToCartSlice);

  //getting selected products thro' api while page rendering
  useEffect(() => {
    getAllSelecedProducts()
      .then((res) => {
        dispatch(getAddToCartAllProductsRedux(res));
      })
      .catch((err) => {
        return err;
      });
    // Note: Below line stoping the warning of "React Hook useEffect has a missing dependency"
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="main_sec">
      <div className="body_outer_div">
        <div className="body_inner_div">
          <Header />
          <SelectedProductCard
            productInfo={productInfo}
          />
        </div>
      </div>
    </section>
  );
};

export default AddToCart;
