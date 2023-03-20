import { ErrorMessage } from "formik";

const FormError = ({ name }) => {
  return (
    <div style={{ color: "red" }}>
      <ErrorMessage name={name} />
    </div>
  );
};

export default FormError;
