import RatingStar from "../../component/RatingStar/RatingStar";
import watchImg from "../../assets/images/watch.webp";
import FullPageLoader from "../FullPageLoader/FullPageLoader";
import CommonNetworkError from "../CommonNetworkError/CommonNetworkError";
import {
  addToCartProductApi,
  getSingleCartProduct,
  notify,
  updateCartProductsApi,
} from "../../service/dashBoard";
import { ToastContainer, toast } from "react-toastify";

const ProductCard = ({ setProductInfo, productInfo }) => {
  //==handleClick Incr product Qty
  const handleClickIncrQty = () => {
    productInfo.product.quantity += 1;
    setProductInfo((productInfo) => {
      return { ...productInfo };
    });
  };
  //==handleClick Decr product Qty
  const handleClickDecrQty = () => {
    if (productInfo.product.quantity > 1) {
      productInfo.product.quantity -= 1;
      setProductInfo((productInfo) => {
        return { ...productInfo };
      });
    }
  };

  //handleClick Add To Cart
  const handleClickAddToCart = () => {

    //==get product from cart, if product is already in cart
    getSingleCartProduct(productInfo.product._id)
      .then((res) => {
        if (res?.status === 200) {

          //==send updated product to cart
          updateCartProductsApi(productInfo.product._id, productInfo.product)
            .then((res) => {
              if (res?.status === 200) {
                notify("Product successfully added to cart", "success");
                return res;
              }
            })
            .catch((err) => {
              return err;
            });
        } else {

          //==adding new product to cart, if product is not in cart
          addToCartProductApi(productInfo.product);
          notify("Product successfully added to cart", "success");
        }
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <div className="product_details_div ">
      {productInfo?.loading ? (
        <>
          <FullPageLoader />
          {productInfo?.error && (
            <CommonNetworkError child={productInfo?.error} />
          )}
        </>
      ) : productInfo?.product !== undefined && productInfo?.product !== {} ? (
        <div className="product_card">
          <ToastContainer
            position="top-right"
            autoClose={5000}
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
          <div className="card_left_img_div">
            <img src={watchImg} alt="watch" />
          </div>
          <div className="card_right_product_info">
            <h5>{productInfo?.product?.name}</h5>
            <p>{productInfo?.product?.category}</p>
            <p>{productInfo?.product?.description}</p>
            <RatingStar value={4} />
            <p>
              <strong>Price &#8377;</strong>
              {productInfo?.product?.price}
            </p>
            <div className="quantity_div">
              <strong>Quantity</strong>
              <span onClick={handleClickDecrQty}>-</span>
              <span>{productInfo?.product?.quantity}</span>

              <span onClick={handleClickIncrQty}>+</span>
              <strong>
                Total Price &#8377;
                {productInfo?.product?.price * productInfo?.product?.quantity}
              </strong>
            </div>

            <div className="btn_grp">
              <button onClick={handleClickAddToCart}>Add to cart</button>
              <button>Buy now</button>
            </div>
          </div>
        </div>
      ) : (
        <p>No data found</p>
      )}
      {/* <div className="product_card">
        <div className="card_left_img_div">
          <img src={watchImg} alt="watch" />
        </div>
        <div className="card_right_product_info">
          <h5>name</h5>
          <p>category</p>
          <p>Sescription</p>
          <RatingStar value={4} />
          <p>
            <strong>Price &#8377;</strong>
            54652
          </p>
          <div className="quantity_div">
            <strong>Quantity</strong>
            <span>-</span>
            <span>2</span>
        
            <span>+</span>
            <strong>Total Price &#8377;7656</strong>
          </div>

          <div className="btn_grp">
            <button>Add to cart</button>
            <button>Buy now</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProductCard;
