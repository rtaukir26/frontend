import Header from "../../component/Header/Header";
import RatingStar from "../../component/RatingStar/RatingStar";
import watchImg from "../../assets/images/watch.webp";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleProductApi } from "../../service/dashBoard";

const SingleProduct = () => {
  const [productInfo, setProductInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSingleProductApi(id)
      .then((res) => {
        if (res?.status === 200) {
          setProductInfo(res);
        }
      })
      .catch((err) => {
        return err;
      });
  }, []);

  return (
    <section className="main_sec">
      <div className="body_outer_div">
        <div className="body_inner_div">
          <Header />
          <div className="product_details_div ">
            <div className="product_card">
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
                  {/* <input
                    type="number"
                    readOnly
                    value={2}
                    style={{ width: "50px" }}
                  /> */}
                  <span>+</span>
                  <strong>Total Price &#8377;7656</strong>
                </div>

                <div className="btn_grp">
                  <button>Add to cart</button>
                  <button>Buy now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
