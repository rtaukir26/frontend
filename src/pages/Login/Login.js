import { ReactComponent as UserEmailIcon } from "../../assets/images/userEmailWhite.svg";
import { ReactComponent as UserPwdIcon } from "../../assets/images/key-solid.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  email: "",
  password: "",
  errors: {},
};

const Login = () => {
  const [userInputValue, setUserInputValue] = useState(initialState);
  // const [userInputValueEmail, setUserInputValueEmail] = useState("");
  // const [userInputValuePwd, setUserInputValuePwd] = useState("");

  // const { email, password, errors } = userInputValue;

  const history = useNavigate();

  //===handle input
  // const handleChangeEmail = (e) => {
  //   setUserInputValueEmail(e.target.value);
  // };
  // const handleChangePwd = (e) => {
  //   setUserInputValuePwd(e.target.value);
  // };
  const handleChange = (e) => {
    // const { name, value } = e.target;
    setUserInputValue((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };
  console.log("userInputValue", userInputValue);
  const notify = (msg) =>
    toast.error(msg, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  //====handle submit
  const handleSubmit = async (e) => {
    console.log("userInputValue", userInputValue);
    e.preventDefault();
    if (validateForm()) {
      try {
        const result = await axios.post(
          "http://localhost:4000/api/v1/login",
          // { email: userInputValueEmail, password: userInputValuePwd },
          { email: userInputValue.email, password: userInputValue.password },
          {
            headers: {
              // Accept: "application/json, text/plain",
              "Content-Type": "application/json",
            },
          }
        );
        if (result?.status === 200) {
          notify("Login successful");

          localStorage.setItem(
            "access_token",
            JSON.stringify(result?.data?.token)
          );
          history("/");
          console.log("userInputValue result", result);
        }
      } catch (error) {
        if (error.message === "Network Error") {
          notify(error.message);
        } else {
          notify("Invalid email & password");
        }

        console.log("userInputValue err", error);

        return error;
      }
 
    } else {
      setUserInputValue({ errors: userInputValue.errors });
    }
  };

  //====form validation
  const validateForm = () => {
    let isValid = true;
    if (userInputValue.email === "") {
      isValid = false;
      userInputValue.errors.email = "email is required..";
    }
    if (userInputValue.password === "") {
      isValid = false;
      userInputValue.errors.password = "password is required..";
    }

    return isValid;
  };

  //===handle Focus
  const handleFocus = (e) => {
    userInputValue.errors[e.target.name] = "";
    setUserInputValue({ ...userInputValue,errors: userInputValue?.errors });
  };
  //===handle Blur
  const handleBlur = (e) => {
    if (e.target.value === "") {
      userInputValue.errors[e.target.name] = `${e.target.name} is required..`;
      setUserInputValue({ ...userInputValue,errors: userInputValue?.errors });
    }
  };

  return (
    <section className="body_inner_div">
      <section className="body_outer_div">
        <div className="register_user_main_div">
          <div className="signup_user_div login_div">
            <div>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="light"
                zIndex={1}
              />
              <h5>Login</h5>
              <form action="" className="form_control" onSubmit={handleSubmit}>
                <div className="input_group">
                  <UserEmailIcon className="reactComponent" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                    value={userInputValue?.email}
                    // value={userInputValueEmail}
                    className="inputBox"
                    onChange={handleChange}
                    // onChange={handleChangeEmail}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  <span style={{ color: "#ed4c2f" }}>
                    {userInputValue?.errors?.email &&
                      userInputValue?.errors?.email}
                  </span>
                </div>
                <div className="input_group">
                  <UserPwdIcon className="reactComponent" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    id="password"
                    // value={userInputValuePwd}
                    value={userInputValue?.password}
                    className="inputBox"
                    onChange={handleChange}
                    // onChange={handleChangePwd}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  <span style={{ color: "#ed4c2f" }}>
                    {userInputValue?.errors?.password &&
                      userInputValue?.errors?.password}
                  </span>

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
    </section>
  );
};
export default Login;
