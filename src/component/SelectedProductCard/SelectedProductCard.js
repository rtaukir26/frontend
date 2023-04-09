import RatingStar from "../../component/RatingStar/RatingStar";
import watchImg from "../../assets/images/watch.webp";
import FullPageLoader from "../FullPageLoader/FullPageLoader";
import CommonNetworkError from "../CommonNetworkError/CommonNetworkError";

const SelectedProductCard = ({ setProductInfo, productInfo }) => {
  //==handleClick Incr product Qty
  const handleClickIncrQty = () => {
    productInfo.product.quantities += 1;
    setProductInfo((productInfo) => {
      return { ...productInfo };
    });
  };
  //==handleClick Decr product Qty
  const handleClickDecrQty = () => {
    if (productInfo.product.quantities > 1) {
      productInfo.product.quantities -= 1;
      setProductInfo((productInfo) => {
        return { ...productInfo };
      });
    }
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
      ) : productInfo?.product?.addToCart.length > 0 ? (
        <div>
          {productInfo?.product?.addToCart.map((item) => (
            <div className="product_card">
              <div className="card_left_img_div">
                <img src={watchImg} alt="watch" />
              </div>
              <div className="card_right_product_info">
                <h5>{item?.name}</h5>
                <p>{item?.category}</p>
                <p>{item?.description}</p>
                <RatingStar value={4} />
                <p>
                  <strong>Price &#8377;</strong>
                  {item?.price}
                </p>
                <div className="quantity_div">
                  <strong>Quantity</strong>
                  <span onClick={handleClickDecrQty}>-</span>
                  <span>{item?.quantity}</span>

                  <span onClick={handleClickIncrQty}>+</span>
                  <strong>
                    Total Price &#8377;
                    {item?.price * item?.quantity}
                  </strong>
                </div>

                <div className="btn_grp">
                  <button>Add to cart</button>
                  <button>Buy now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default SelectedProductCard;
