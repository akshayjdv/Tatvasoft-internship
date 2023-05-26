// import React from 'react'
// import authService from './Auth.service';
// import { useFormik } from "formik";
// import { loginSchema } from "./schemas";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
// import './login.css'
// import { useState } from 'react';




// // const initialValues = {
// //   email: "",
// //   password: "",
// // };


// const Login = () => {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');


//     const navigate = useNavigate();

//     // const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     //   useFormik({
//     //     initialValues: initialValues,
//     //     validationSchema: loginSchema,
//     //     onSubmit: (data) => {
//     //       // console.log(values);
//     //       alert(
            
//     //            ` username : ${data.email} and passwd : ${data.password} `
            
//     //       );

//     //       // authService.login(data).then((res) => {
//     //       //   navigate("/login");
//     //       //   toast("login successfull", { position: "top-center" });
//     //       // });

//     //       authService
//     //         .login(data)
//     //         .then((res) => {
//     //           setEmail("");
//     //           setPassword("");
//     //           toast.success("Successfully login!", {
//     //             position: toast.POSITION.TOP_RIGHT,
//     //           });
//     //         })
//     //         .catch((error) => {
//     //           toast.error(
//     //             error?.response?.data?.error ?? "Somthing went wrong"
//     //           );
//     //         });


//     //     },
//     //   });


//      const  handleSubmit = (event) => {
//       event.preventDefault();
//       const data = {
//         email: email,
//         password: password,
//       };
//       authService
//         .login(data)
//         .then((res) => {
//           setEmail("");
//           setPassword("");
//           toast.success("Successfully login!", {
//             position: toast.POSITION.TOP_RIGHT,
//           });
//         })
//         .catch((error) => {
//           toast.error(error?.response?.data?.error ?? "Somthing went wrong");
//         });
//     }

//   return (
//     <>
//       <div className="">
//         <div className="form_">
//           <div className="form-body_">
//             <h1 style={{ textAlign: "center" }}>Login</h1>
//             <form onSubmit={handleSubmit}>
//               <div className="username_">
//                 <label className="form__label_" for="email">
//                   Username:{" "}
//                 </label>
//                 <input
//                   className="form__input_"
//                   type="text"
//                   id="email"
//                   name="email"
//                   placeholder="email"
//                   value={email}
//                   onChange={(e)=>{setEmail(e.target.value)}}
                  
//                 />
//                 {errors.email && touched.email ? (
//                   <p className="form-error_">{errors.email}</p>
//                 ) : null}
//               </div>
              
//               <div className="password_">
//                 <label className="form__label_" for="password">
//                   Password:{" "}
//                 </label>
//                 <input
//                   className="form__input_"
//                   type="password"
//                   name="password"
//                   id="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e)=>{setPassword(e.target.value)}}
                  
//                 />
//                 {errors.password && touched.password ? (
//                   <p className="form-error">{errors.password}</p>
//                 ) : null}
//               </div>
              
//               <div class="footer_">
//                 <button type="submit" class="btn_" style={{ cursor: "pointer" }}>
//                   LOGIN
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       <ToastContainer />
//     </>
//   );
// }

// export default Login


// // import React from 'react'
// // import { Box, TextField, Button , styled,} from "@mui/material";
// // import authService from './Auth.service';
// // import { useFormik } from "formik";
// // import { loginSchema } from "./schemas";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import { useNavigate } from "react-router-dom";



// // const Component = styled(Box)`
// //   ${"" /* height: 490px; */}
// //   width: 400px;
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   justify-content: center;
// //   border-radius: 20px;
// //   margin-top:40px;
// //   margin-bottom:20px;
// //   /* box-shadow: 1px 1px 2px 2px rgba(0,0,0,0.3); */
// //   box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
// //     rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
// // `;


// // const Image = styled("img")`
// //   width: 100px;
// //   ${'' /* height: 100px; */}
// //   margin: auto;
// //   display: flex;
// //   padding: 50px 0 0;
// // `;

// // const Wrapper = styled(Box)`
// //   padding: 25px 35px;
// //   display: flex;
// //   flex: 1;
// //   flex-direction: column;
// //   & > div,
// //   & > button,
// //   & > p {
// //     margin-top: 20px;
// //   }
// // `;

// // const CenterBox = styled(Box)`
// //   display: flex;
// //   padding: 10px;
// //   background-color: "red";
// //   margin: auto;
// //   height: 100%;
// //   width: 100;
// //   flex-direction: column;
// //   justify-content: center;
// //   align-items: center;
// //   overflow-x: hidden;
// //   overflow-y: hidden;
// // `;

// // const LoginButton = styled(Button)`
// //   text-transform: none;
// //   background: #2af598;
// //   display:flex:
// //   margin:auto;
// //   color: #fff;
// //   height: 48px;
// //   border-radius: 3px;
// // `;

// // const initialValues = {
// //   username: "",
// //   password: "",
// // };


// // const Login = () => {

// //     const navigate = useNavigate();

// //     const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
// //       useFormik({
// //         initialValues: initialValues,
// //         validationSchema: loginSchema,
// //         onSubmit: (data) => {
// //           // console.log(values);
// //           alert(
            
// //                ` ${data.username} ${data.password} `
            
// //           );

// //           // delete data.id;
// //           // delete data.confirmPassword;

// //           authService.login(data).then((res) => {
// //             navigate("/login");
// //             toast("login successfull", { position: "top-center" });
// //           });
// //         },
// //       });


// //   return (
// //     <>
// //       <CenterBox>
// //         <Component className="loginBox" style={{ backgroundColor: "" }}>
// //           <Box className="imgBox">
// //             <Image src='' alt="logo" />
// //           </Box>
// //           <Wrapper className="inputBox">
// //             <TextField label="Username" style={{ width: "350px" }}></TextField>
// //             <TextField label="Password"></TextField>
            
// //             <LoginButton variant="contained" style={{ width: "" }} onClick={handleSubmit}>
// //               Login
// //             </LoginButton>
          
// //           </Wrapper>
// //         </Component>
// //       </CenterBox>
// //     </>
// //   );
// // }

// // export default Login






















// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------

import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";


import authService from "./Auth.service";
import { toast , ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (event) => {

    event.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    authService
      .login(data)
      .then((res) => {
        // alert(`username : ${data.email} and password : ${data.password}`)
        setEmail("");
        setPassword("");
        toast.success("Successfully login!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        toast.error(error?.response?.data?.error ?? "Somthing went wrong");
      });

  }

  return (
    <>
      <div className="center_">
        <Container>
          <h2 className="heading" style={{textAlign:'center',marginBottom:'20px'}}>Login Page</h2>
          <form onSubmit={handleSubmit}>
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

            <Button variant="outlined" color="secondary" type="submit">
              Login
            </Button>
          </form>
        </Container>
      </div>

      <ToastContainer />
    </>
  );
};

export default Login;
