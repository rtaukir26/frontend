import { ReactComponent as UserEmailIcon } from "../../assets/images/userEmailWhite.svg";
import { ReactComponent as UserPwdIcon } from "../../assets/images/key-solid.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="body_inner_div">
      <div className="register_user_main_div">
        <div className="signup_user_div login_div">
          <div>
            <h5>Login</h5>
            <form action="" className="form_control">
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
                <div className="forget_password_div">
                  <Link>
                    <span>Forgot password?</span>
                  </Link>
                  <Link>
                    <span>New account</span>
                  </Link>
                </div>
              </div>
              <div className="btn_d_flex">
                <button type="submit">Login</button>

    
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
