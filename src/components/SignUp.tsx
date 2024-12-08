import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"; 
import "../styles/signup.css";  
import Password from "./Password"; 

const SignUp: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string>("");
  const navigate = useNavigate(); 

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSuccessMessage("Sign Up Successful");
            setSubmitting(false);
            navigate("/login"); 
          }, 500);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" id="password" />
              <Password password={values.password} />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
};

export default SignUp;
