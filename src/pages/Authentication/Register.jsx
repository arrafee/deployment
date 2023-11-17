// components/RegisterForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = "First Name is required";
  } else if (values.firstname.length < 3) {
    errors.firstname = "First Name must be at least 3 characters";
  }

  if (!values.lastname) {
    errors.lastname = "Last Name is required";
  } else if (values.lastname.length < 3) {
    errors.lastname = "First Name must be at least 3 characters";
  }

  if (!values.username) {
    errors.username = "Username is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};

const Register = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values) => {
    // Simulasikan pengiriman data ke server
    console.log("Form data:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="container">
          <div className="row justify-content-center mt-5 pt-5">
            <div className="col-md-9">
              <div className="card px-4">
                <div className="card-body">
                  <h3 className="card-title text-center">Register Page</h3>
                  <div className="form mt-5">
                    <div className="row">
                      <div className="col-md-6 mt-3">
                        <div>
                          <label htmlFor="firstname">First Name</label>
                          <Field
                            type="text"
                            name="firstname"
                            className="form-control rounded-pill p-1"
                          />
                          <ErrorMessage
                            name="firstname"
                            className="text-danger"
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mt-3">
                        <div>
                          <label htmlFor="lastname">Last Name</label>
                          <Field
                            type="text"
                            name="lastname"
                            className="form-control rounded-pill p-1"
                          />
                          <ErrorMessage
                            name="lastname"
                            className="text-danger"
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mt-3">
                        <div>
                          <label htmlFor="username">Username</label>
                          <Field
                            type="text"
                            name="username"
                            className="form-control rounded-pill p-1"
                          />
                          <ErrorMessage
                            name="username"
                            className="text-danger"
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mt-3">
                        <div>
                          <label htmlFor="email">Email</label>
                          <Field
                            type="text"
                            name="email"
                            className="form-control rounded-pill p-1"
                          />
                          <ErrorMessage
                            name="email"
                            className="text-danger"
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mt-3">
                        <div>
                          <label htmlFor="password">Password</label>
                          <Field
                            type="password"
                            name="password"
                            className="form-control rounded-pill p-1"
                          />
                          <ErrorMessage
                            name="password"
                            className="text-danger"
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mt-3">
                        <div>
                          <label htmlFor="confirmPassword">
                            Confirm Password
                          </label>
                          <Field
                            type="password"
                            name="confirmPassword"
                            className="form-control rounded-pill p-1"
                          />
                          <ErrorMessage
                            name="confirmPassword"
                            className="text-danger"
                            component="div"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary mt-4 rounded-pill"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-center">
                  <small>
                    Have a account?
                    <a href="/login" className="text-decoration-none">
                      Login
                    </a>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default Register;
