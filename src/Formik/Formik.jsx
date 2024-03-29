import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Formik.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
  <div>  
    <div className="login-box">
    
      <h2> Login</h2>

      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validate={validate}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="user-box ">
            <Field name="firstName" type="text" />
            <label>First Name</label>
            <ErrorMessage name="firstName" component="div" className="error" />
          </div>
          <div className="user-box">
            <Field name="lastName" type="text" />
            <label>Last Name</label>
            <ErrorMessage name="lastName" component="div" className="error" />
          </div>
          <div className="user-box">
            <Field name="email" type="email" />
            <label>Email</label>
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>Submit
          </button>    <Link className="mx-2 box p-2  " to="/">
    back
        </Link>
        </Form>
      </Formik>
    </div></div>
  );
};

export default LoginForm;
