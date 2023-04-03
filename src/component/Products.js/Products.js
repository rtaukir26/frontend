import { useNavigate } from "react-router-dom";
import CommonNetworkError from "../CommonNetworkError/CommonNetworkError";
import FullPageLoader from "../FullPageLoader/FullPageLoader";
import RatingStar from "../RatingStar/RatingStar";
import axios from "axios";

const Products = ({ allProductsApi }) => {
  const history = useNavigate();
  //
  const handleClickGetSingleProductInfo = (item) => {
    history(`/product/${item._id}`);
  };
  //handleClick AddToCart
  const handleClickAddToCart = (item) => {
    // history(`/product/${item._id}`)
    axios
      .post("http://localhost:4000/api/v1//add-selected-product", item)
      .then((res) => console.log("res", res))
      .catch((err) => {
        return err;
      });
    console.log("res item", item);
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
