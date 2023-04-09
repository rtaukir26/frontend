import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as UserIcon } from "../../assets/images/user-tie-solid.svg";
import { ReactComponent as LogOutIcon } from "../../assets/images/logOutIcon.svg";
import userProfileIcon from "../../assets/images/user.png";
import searchIcon from "../../assets/images/loupe.png";
import editIcon from "../../assets/images/edit.png";
import { useEffect, useState } from "react";
import { routePaths } from "../../routes/routePaths";
import { getAllSelecedProducts } from "../../service/dashBoard";

const Header = () => {
  const history = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [totalAddToCartLength, setTotalAddToCartLength] = useState(null);

  //===logout
  const handleClickLogout = () => {
    localStorage.removeItem("access_token");
    history(routePaths.login);
  };

  //===getUserDetails
  const getUserDetails = () => {
    let userData = JSON.parse(localStorage.getItem("user"));
    setUserInfo(userData);
  };

  //===product added to cart
  const handleClickAddToCart = () => {
    history(routePaths.selectedProducts);
  };
  useEffect(() => {
    getAllSelecedProducts()
      .then((res) => {
        if (res?.status === 200) {
          setTotalAddToCartLength(res?.data?.addToCart);
        }
        console.log("res", res);
      })
      .catch((err) => err);
  }, [totalAddToCartLength]);

  return (
    <section className="header_sec">
      <div className="header_inside_div">
        {/* =======left div======= */}
        <div className="header_left_div">
          <span>
            <i className="fa-brands fa-drupal fa-2xl fa-regular"></i>
            <span>Ind Express</span>
          </span>
          <div>
            <input
              type="search"
              className="search_input"
              name="search"
              id="search"
              placeholder="search your product"
            />
            <img src={searchIcon} alt="search" />
            {/* <i class="fa-solid fa-magnifying-glass fa-lg"></i> */}
          </div>
        </div>

        {/* =======middle div======= */}
        <div className="header_middle_div">
          <Link to="/">
            <span>Home</span>
          </Link>

          <Link to="/about">
            <span> About </span>
          </Link>

          <Link to="/contact">
            <span>Contact</span>
          </Link>
        </div>

        {/* =======right div======= */}
        <div className="header_right_div">
          <span className="cart_span" onClick={handleClickAddToCart}>
            <span>{totalAddToCartLength?.length}</span>
            <i className="fa-solid fa-cart-plus fa-xl"></i>
          </span>
          <span className="logout_span" tabIndex="0">
            <LogOutIcon />
            <ul className="">
              <div className="user_details_div">
                <span>
                  <UserIcon />
                </span>
                <span>Md Tauqueer</span>
              </div>
              <div>
                <p>Are you sure you want to Log out?</p>
                <div>
                  <button>No</button>
                  <button onClick={handleClickLogout}>Yes</button>
                </div>
              </div>
            </ul>
          </span>
          <span
            className="user_details_span"
            tabIndex="0"
            onClick={getUserDetails}
          >
            {/* <UserIcon /> */}
            <img src={userProfileIcon} alt="user-icon" />

            <ul>
              <div>
                <img src={userProfileIcon} alt="user-icon" />
                <strong>{userInfo.name}</strong>
              </div>
              {/* <li>{userInfo.name}</li> */}
              <li>{userInfo.email}</li>
              <li>+91 7356875566</li>
              <li>
                <img src={editIcon} alt="edit" />
                update profile
              </li>
            </ul>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Header;
