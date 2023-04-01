import CommonNetworkError from "../CommonNetworkError/CommonNetworkError";
import FullPageLoader from "../FullPageLoader/FullPageLoader";

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
            {allProductsApi?.Products?.map((item,i) => (
              <div key={i} className="card">
                <h5>{item.name}</h5>
                <p>{item.category}</p>
                <p>{item.description}</p>
                <p>{item.rating}</p>
                <p>{item.price}</p>
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