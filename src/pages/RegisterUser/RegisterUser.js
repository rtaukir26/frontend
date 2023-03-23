import { ReactComponent as UserIcon } from "../../assets/images/user-regularIcon-white.svg";
import { ReactComponent as UserEmailIcon } from "../../assets/images/userEmailWhite.svg";
import { ReactComponent as UserPwdIcon } from "../../assets/images/key-solid.svg";
import { ReactComponent as UserConfrmPwdIcon } from "../../assets/images/key-solid-icon2.svg";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import FormError from "../../component/commonFormError/FormError";
import { signUpValidationSchema } from "../../component/commonFormError/validationSchema/index";

const RegisterUser = () => {
  const handleSubmit = async (values, action, errors) => {
    action.resetForm();
    // let result = await fetch("http://localhost:5000/api/register", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     name: values.name,
    //     email: values.email,
    //     password: values.password,
    //   }),
    //   headers: { "Content-Type": "application/json" },
    // });
    // result =await result.json();
    // console.log("backend result: ", result);
    // localStorage.setItem("user",JSON.stringify(result))
    // if(result)
    // {
    //   history("/")
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  return (
    <div className="register_user_main_div">
      <div className="signup_user_div">
        <h5>Sign up</h5>
        <div>
          {/* <form onSubmit={HandleSubmit} className="form_control">
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
              <button type="submit">Submit</button>

              <Link>
                <span>{`<< `}Login</span>
              </Link>
            </div>
          </form> */}

          <Formik
            initialValues={initialValues}
            validationSchema={signUpValidationSchema}
            onSubmit={handleSubmit}
          >
            {({
              values,
              error,
              touched,
              handleChange,
              handleBlur,
              handleReset,
              isSubmitting,
            }) => (
              <Form className="form_control">
                <div className="input_group">
                  <UserIcon className="reactComponent" />

                  <Field
                    type="text"
                    name="name"
                    value={values.name}
                    placeholder="Plaese enter your name"
                    autoComplete="off"
                  />
                  <FormError name="name" />
                </div>

                <div className="input_group">
                  <UserEmailIcon className="reactComponent" />

                  <Field
                    type="email"
                    name="email"
                    value={values.email}
                    placeholder="Plaese enter your email"
                    autoComplete="off"
                  />
                  <FormError name="email" />
                </div>
                <div className="input_group">
                  <UserPwdIcon className="reactComponent" />

                  <Field
                    type="password"
                    name="password"
                    value={values.password}
                    placeholder="Plaese enter your password"
                    autoComplete="off"
                  />
                  <FormError name="password" />
                </div>
                <div className="input_group">
                  <UserConfrmPwdIcon className="reactComponent" />

                  <Field
                    type="password"
                    name="confirm_password"
                    value={values.confirm_password}
                    placeholder="Plaese enter your confirm password"
                    autoComplete="off"
                  />
                  <FormError name="confirm_password" />
                </div>
                <div className="btn_d_flex">
                  <button type="submit">Signup</button>

                  <Link to="/login">
                    <span>{`<< `}Login</span>
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
