import { useNavigate } from "react-router-dom";
import CommonNetworkError from "../CommonNetworkError/CommonNetworkError";
import FullPageLoader from "../FullPageLoader/FullPageLoader";
import RatingStar from "../RatingStar/RatingStar";
import {
  addToCartProductApi,
  getSingleCartProduct,
  notify,
  updateCartProductsApi,
} from "../../service/dashBoard";
import { ToastContainer } from "react-toastify";

const Products = ({ allProductsApi }) => {
  const history = useNavigate();

  //==navigate to singleProduct page
  const handleClickGetSingleProductInfo = (item) => {
    history(`/product/${item._id}`);
  };
  //==handleClick AddToCart
  const handleClickAddToCart = (item) => {
    //==get product from cart, if product is already in cart
    getSingleCartProduct(item._id)
      .then((res) => {
        if (res?.status === 200) {
          res.data.singleProduct.quantity += 1;
          let updateProduct = res.data.singleProduct;

          //==send updated product to cart
          updateCartProductsApi(item._id, updateProduct)
            .then((res) => {
              if (res?.status === 200) {
                notify("Product successfully added to cart", "success");

                return updateProduct;
              }
            })
            .catch((err) => {
              return err;
            });
        } else {
          //==adding new product to cart, if product is not in cart
          addToCartProductApi(item);
          notify("Product successfully added to cart", "success");
        }
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <div>
      <div>
        {allProductsApi.loading ? (
          <>
            <FullPageLoader />
            {allProductsApi?.error && (
              <CommonNetworkError child={allProductsApi?.error} />
            )}
          </>
        ) : allProductsApi?.Products?.length > 0 ? (
          <div className="product_body">
            <ToastContainer
              position="top-right"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable
              pauseOnHover={false}
              theme="light"
              zIndex={1}
              // icon={false}
            />
            {allProductsApi?.Products?.map((item, i) => (
              <div key={i} className="card">
                <h5>{item.name}</h5>
                <p>{item.category}</p>
                <p>{item.description}</p>
                <RatingStar value={item.rating} />
                <p>
                  {" "}
                  <strong>Price &#8377;</strong>
                  {item.price}
                </p>
                <div className="btn_grp">
                  <button onClick={() => handleClickAddToCart(item)}>
                    Add to cart
                  </button>
                  <button onClick={() => handleClickGetSingleProductInfo(item)}>
                    Buy now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
};

export default Products;
