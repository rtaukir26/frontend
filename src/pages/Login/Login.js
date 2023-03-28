import { ReactComponent as UserEmailIcon } from "../../assets/images/userEmailWhite.svg";
import { ReactComponent as UserPwdIcon } from "../../assets/images/key-solid.svg";
import { ReactComponent as OpenEyeIcon } from "../../assets/images/eye-regular.svg";
import { ReactComponent as OpenEyeSlashIcon } from "../../assets/images/eye-slash-regular.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../../service/dashBoard";

const initialState = {
  email: "",
  password: "",
  errors: {},
};

const Login = () => {
  const [userInputValue, setUserInputValue] = useState(initialState);
  const [isPwdHideShow, setIsPwdHideShow] = useState(true);

  // const { email, password, errors } = userInputValue;

  const history = useNavigate();

  const handleChange = (e) => {
    setUserInputValue((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };
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
    e.preventDefault();
    if (validateForm()) {
      loginUser(userInputValue)
        .then((res) => {
          console.log("res res", res);
          if (res?.status === 200) {
            notify("Login successfull");

            localStorage.setItem(
              "access_token",
              JSON.stringify(res?.data?.token)
            );
            history("/");
          } else if (res?.message === "Network Error") {
            notify(res?.message);
          } else {
            notify("Invalid email & password");
          }
        })
        .catch((err) => {
          console.log("res err", err);
          if (err.message === "Network Error") {
            notify(err.message);
          }
          //  else {
          //   notify("Invalid email & password");
          // }
        });
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
    setUserInputValue({ ...userInputValue, errors: userInputValue?.errors });
  };
  //===handle Blur
  const handleBlur = (e) => {
    if (e.target.value === "") {
      userInputValue.errors[e.target.name] = `${e.target.name} is required..`;
      setUserInputValue({ ...userInputValue, errors: userInputValue?.errors });
    }
  };
  const handleClickPwdHideShow = () => {
    let textType = document.getElementById("password").getAttribute("type");
    setIsPwdHideShow(!isPwdHideShow);
    if (textType === "password") {
      document.getElementById("password").removeAttribute("type", "password");
      document.getElementById("password").setAttribute("type", "text");
    } else {
      document.getElementById("password").removeAttribute("type", "text");
      document.getElementById("password").setAttribute("type", "password");
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
                  {/* <UserPwdIcon className="reactComponent" /> */}
                  <span onClick={handleClickPwdHideShow}>
                    {isPwdHideShow ? (
                      <OpenEyeIcon className="eyeOpen" />
                    ) : (
                      <OpenEyeSlashIcon className="eyeOpen" />
                    )}
                  </span>
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
