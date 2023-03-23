import { ReactComponent as UserEmailIcon } from "../../assets/images/userEmailWhite.svg";
import { ReactComponent as UserPwdIcon } from "../../assets/images/key-solid.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [userInputValue, setUserInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userInputValue;

  const history=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInputValue((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history("/")
    console.log("userInputValue", userInputValue);
  };

  return (
    // <section className="body_inner_div">
    <section className="body_outer_div">
      <div className="register_user_main_div">
        <div className="signup_user_div login_div">
          <div>
            <h5>Login</h5>
            <form action="" className="form_control" onSubmit={handleSubmit}>
              <div className="input_group">
                <UserEmailIcon className="reactComponent" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  className="inputBox"
                  onChange={handleChange}
                />
              </div>
              <div className="input_group">
                <UserPwdIcon className="reactComponent" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={password}
                  className="inputBox"
                  onChange={handleChange}
                />
                <div className="forget_password_div">
                  <Link>
                    <span>Forgot password?</span>
                  </Link>
                  <Link to="/register">
                    <span>New account</span>
                  </Link>
                </div>
              </div>
              <div className="btn_d_flex">
                <button>Login</button>
                {/* <button ><Link to="/">Login</Link></button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
