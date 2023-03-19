import { ReactComponent as UserIcon } from "../../assets/images/user-regularIcon-white.svg";
import { ReactComponent as UserEmailIcon } from "../../assets/images/userEmailWhite.svg";
import { ReactComponent as UserPwdIcon } from "../../assets/images/key-solid.svg";
import { ReactComponent as UserConfrmPwdIcon } from "../../assets/images/key-solid-icon2.svg";
import { Link } from "react-router-dom";

const RegisterUser = () => {
  return (
    <div className="register_user_main_div">
      <div className="signup_user_div">
        <h5>Sign up</h5>
        <div>
          <form action="" className="form_control">
            <div className="input_group">
              <UserIcon className="reactComponent" />
              <input
                type="text"
                placeholder="Enter your name"
                name="user name"
                className="inputBox"
              />
            </div>
            <div className="input_group">
              <UserEmailIcon className="reactComponent" />
              <input
                type="email"
                placeholder="Enter your email"
                name="user email"
                className="inputBox"
              />
            </div>
            <div className="input_group">
              <UserPwdIcon className="reactComponent" />
              <input
                type="password"
                placeholder="Enter your password"
                name="user password"
                className="inputBox"
              />
            </div>
            <div className="input_group">
              <UserConfrmPwdIcon className="reactComponent" />
              <input
                type="password"
                placeholder="Enter your confirm password"
                name="user confirm password"
                className="inputBox"
              />
            </div>

            <div className="btn_d_flex">
              <button>Submit</button>

              <Link>
                <span>{`<< `}Login</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
