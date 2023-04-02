import RatingStar from "../../component/RatingStar/RatingStar";
import watchImg from "../../assets/images/watch.webp";
import FullPageLoader from "../FullPageLoader/FullPageLoader";
import CommonNetworkError from "../CommonNetworkError/CommonNetworkError";

const ProductCard = ({ setProductInfo, productInfo }) => {
  //handleClick Incr product Qty
  const handleClickIncrQty = () => {
    productInfo.product.quantities += 1;
    setProductInfo((productInfo) => {
      return { ...productInfo };
    });
  };
  //handleClick Decr product Qty
  const handleClickDecrQty = () => {
    if (productInfo.product.quantities > 1) {
      productInfo.product.quantities -= 1;
      setProductInfo((productInfo) => {
        return { ...productInfo };
      });
    }
  };
  console.log("productInfo ", productInfo);

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
              <span>{productInfo?.product?.quantities}</span>

              <span onClick={handleClickIncrQty}>+</span>
              <strong>
                Total Price &#8377;
                {productInfo?.product?.price * productInfo?.product?.quantities}
              </strong>
            </div>

            <div className="btn_grp">
              <button>Add to cart</button>
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
