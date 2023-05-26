// import React from "react";
// import "./registration.css";
// import './style.css'
// import { useFormik } from "formik";
// import { signUpSchema } from "./schemas";
// import { ToastContainer,toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css'
// import authService from "./Auth.service";
// import { useNavigate } from "react-router-dom";

// const initialValues = {
//     firstName:"",
//     lastName:"",
//     email:"",
//     password:"",
//     confirmPassword:""
// }

// const RegistrationForm = () => {

//     const navigate = useNavigate();

//     const {values,errors,touched, handleBlur,handleChange,handleSubmit} = useFormik({
//         initialValues:initialValues,
//         validationSchema:signUpSchema,
//         onSubmit: (data)=>{
//             // console.log(values);
//             alert(
//               `FirstName : ${data.firstName},
//             LastName : ${data.lastName},
//             Email :  ${data.email},
//             PassWD : ${data.password}`
//             );


//             // delete data.id;
//             // delete data.confirmPassword;


//             authService.create(data).then( (res)=>{
//               navigate('/register');
//               toast('register successfull',{position:"top-center"});
//             });
//         },
//     });

//     // alert(values);
//     // const loginToast = () =>{
//     //   toast('register successfull',{position:"top-center"});
//     //   // toast.error('registeration is not successfull',{position:"top-center"});
//     // }
    

//   return (
//     <>
//       <div className="">
//         <div className="form">
//           <div className="form-body">
//             <h1 style={{ textAlign: "center" }}>Register</h1>
//             <form onSubmit={handleSubmit}>
//               <div className="username">
//                 <label className="form__label" for="firstName">
//                   First Name:{" "}
//                 </label>
//                 <input
//                   className="form__input"
//                   type="text"
//                   id="firstName"
//                   name="firstName"
//                   placeholder="First Name"
//                   value={values.firstName}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {errors.firstName && touched.firstName ? (
//                   <p className="form-error">{errors.firstName}</p>
//                 ) : null}
//               </div>
//               <div className="lastname">
//                 <label className="form__label" for="lastName">
//                   Last Name:{" "}
//                 </label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   id="lastName"
//                   className="form__input"
//                   placeholder="LastName"
//                   value={values.lastName}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {errors.lastName && touched.lastName ? (
//                   <p className="form-error">{errors.lastName}</p>
//                 ) : null}
//               </div>
//               <div className="email">
//                 <label className="form__label" for="email">
//                   Email:{" "}
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="form__input"
//                   placeholder="Email"
//                   value={values.email}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {errors.email && touched.email ? (
//                   <p className="form-error">{errors.email}</p>
//                 ) : null}
//               </div>
//               <div className="password">
//                 <label className="form__label" for="password">
//                   Password:{" "}
//                 </label>
//                 <input
//                   className="form__input"
//                   type="password"
//                   name="password"
//                   id="password"
//                   placeholder="Password"
//                   value={values.password}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {errors.password && touched.password ? (
//                   <p className="form-error">{errors.password}</p>
//                 ) : null}
//               </div>
//               <div className="confirm-password">
//                 <label className="form__label" for="confirmPassword">
//                   Confirm Password:{" "}
//                 </label>
//                 <input
//                   className="form__input"
//                   type="password"
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   placeholder="Confirm Password"
//                   value={values.confirmPassword}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {errors.confirmPassword && touched.confirmPassword ? (
//                   <p className="form-error">{errors.confirmPassword}</p>
//                 ) : null}
//               </div>
//               <div class="footer">
//                 <button type="submit" class="btn" style={{ cursor: "pointer" }} >
//                   Register
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       <ToastContainer/>
//     </>
//   );
// }
// export default RegistrationForm;



















// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________
// ______________________________________________________________________________________________________


import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Stack,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import "./registration.css";
import authService from "./Auth.service";
import { toast , ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

      

      const alertFun = () =>{
        // toast('login done')
      }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      roleId: role,
      password: password,
    };
    authService
      .create(data)
      .then((res) => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setRole("");
        // console.log(data.result);

        toast.success("Successfully registred!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        toast.error(error?.response?.data?.error ?? "Somthing went wrong");
      });
  };

  return (
    <>
      <div className="registrationformcenter">
        <Container>
          <h2 className="heading">Register Form</h2>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                fullWidth
                required
              />
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                fullWidth
                required
              />
            </Stack>
            <TextField
              type="email"
              variant="outlined"
              color="secondary"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              fullWidth
              required
              sx={{ mb: 4 }}
            />
            <FormControl
              color="secondary"
              variant="outlined"
              sx={{ mb: 4 }}
              required
              fullWidth
            >
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                variant="outlined"
                value={role}
                label="role"
                onChange={(e) => setRole(e.target.value)}
              >
                <MenuItem value={3}>Buyer</MenuItem>
                <MenuItem value={2}>Seller</MenuItem>
              </Select>
            </FormControl>
            <TextField
              type="password"
              variant="outlined"
              color="secondary"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              fullWidth
              sx={{ mb: 4 }}
            />

            <Button
              variant="outlined"
              color="secondary"
              type="submit"
              onClick={alertFun}
            >
              Register
            </Button>
          </form>
        </Container>
      </div>

      <ToastContainer />
    </>
  );
};

export default RegisterForm;