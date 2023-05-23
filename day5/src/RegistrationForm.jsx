import React from "react";
import "./registration.css";
import './style.css'
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";

const initialValues = {
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
}

const RegistrationForm = () => {

    

    const {values,errors,touched, handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues:initialValues,
        validationSchema:signUpSchema,
        onSubmit: (values)=>{
            // console.log(values);
            alert(
              `FirstName : ${values.firstName},
            LastName : ${values.lastName},
            Email :  ${values.email},
            PassWD : ${values.password}`
            );
        },
    });

    // alert(values);
    

  return (
    <>
      <div className="">
        <div className="form">
          <div className="form-body">
            <h1 style={{ textAlign: "center" }}>Register</h1>
            <form onSubmit={handleSubmit}>
              <div className="username">
                <label className="form__label" for="firstName">
                  First Name:{" "}
                </label>
                <input
                  className="form__input"
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.firstName && touched.firstName ? (
                  <p className="form-error">{errors.firstName}</p>
                ) : null}
              </div>
              <div className="lastname">
                <label className="form__label" for="lastName">
                  Last Name:{" "}
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="form__input"
                  placeholder="LastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.lastName && touched.lastName ? (
                  <p className="form-error">{errors.lastName}</p>
                ) : null}
              </div>
              <div className="email">
                <label className="form__label" for="email">
                  Email:{" "}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form__input"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="form-error">{errors.email}</p>
                ) : null}
              </div>
              <div className="password">
                <label className="form__label" for="password">
                  Password:{" "}
                </label>
                <input
                  className="form__input"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="form-error">{errors.password}</p>
                ) : null}
              </div>
              <div className="confirm-password">
                <label className="form__label" for="confirmPassword">
                  Confirm Password:{" "}
                </label>
                <input
                  className="form__input"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <p className="form-error">{errors.confirmPassword}</p>
                ) : null}
              </div>
              <div class="footer">
                <button type="submit" class="btn" style={{ cursor: "pointer" }}>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default RegistrationForm;
