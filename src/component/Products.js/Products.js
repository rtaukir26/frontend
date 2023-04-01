import CommonNetworkError from "../CommonNetworkError/CommonNetworkError";
import FullPageLoader from "../FullPageLoader/FullPageLoader";
import RatingStar from "../RatingStar/RatingStar";

const Products = ({ allProductsApi }) => {
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
                {/* <p>{item.rating}</p> */}
                <RatingStar value={item.rating} />
                <p> <strong>Price &#8377;</strong>{item.price}</p>
                <div className="btn_grp">
                  <button>Add to cart</button>
                  <button>Buy now</button>
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
