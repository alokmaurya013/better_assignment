import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "../styles/login.css"; 

interface LoginProps {
  onLogin: () => void;  
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [successMessage, setSuccessMessage] = useState<string>("");
  const navigate = useNavigate(); 

  return (
    <div className="login-container">
      <h2>Login</h2>
      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          if (values.rememberMe) {
            localStorage.setItem("rememberedEmail", values.email);
          }

          setTimeout(() => {
            setSuccessMessage("Login Successful");
            setSubmitting(false);
            onLogin();  
            navigate("/home");  
          }, 500);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" id="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>
                <Field type="checkbox" name="rememberMe" />
                Remember Me
              </label>
            </div>

            <button type="submit" disabled={isSubmitting} className="submit-btn">
              Login
            </button>
          </Form>
        )}
      </Formik>

      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
};

export default Login;
