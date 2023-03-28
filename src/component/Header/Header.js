import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as UserIcon } from "../../assets/images/user-tie-solid.svg";
import { ReactComponent as LogOutIcon } from "../../assets/images/logOutIcon.svg";
// import BrandLogo from "../../assets/images/drupal.svg";
// import UserIcon from "../../assets/images/user-tie-solid.svg";

const Header = () => {
  const history = useNavigate();

  const handleClickLogout = () => {
    history("/login");
  };

  return (
    <section className="header_sec">
      <div className="header_inside_div">
        <div className="header_left_div">
          <span>
            <i className="fa-brands fa-drupal fa-2xl fa-regular"></i>
            <span>Ind Express</span>
          </span>
          <input
            type="search"
            className="search_input"
            name="search"
            id="search"
            placeholder="search your product"
          />
        </div>
        <div className="header_right_div">
          <Link to="/">
            <span>Home</span>
          </Link>

          <Link to="/about">
            <span> About </span>
          </Link>

          <Link to="/contact">
            <span>Contact</span>
          </Link>
          {/* <span className="logout_span" onClick={handleClickLogout}> <LogOutIcon /></span> */}
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
          {/* <img src={UserIcon} alt="use-icon" /> */}
          <span>
            <UserIcon />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Header;
