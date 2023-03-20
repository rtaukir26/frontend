import * as Yup from "yup";
//Sign up page validation
export const signUpValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name should be alteast 2 charactors")
    .max(25)
    .required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  // password: Yup.string().matches(^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$,"password should be like these").min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null, "Password must match"])
    .required("Please enter password"),
  // dob: Yup.date().required("date is required"),
  // age: Yup.number().required("age is required"),
  // gender: Yup.string().required("gender required"),
  // social: Yup.array().of(
  //   Yup.string("String is required")
  //     .min(4, "Too sort")
  //     .max(20, "Too long")
  //     .required()
  // ).min(1,"Atleast one social media is required").required(),
  //<ErrorMessage name ="social.0"/>,,>>>>write as it in the social component
});
