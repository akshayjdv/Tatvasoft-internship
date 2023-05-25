import React from 'react'
import authService from './Auth.service';
import { useFormik } from "formik";
import { loginSchema } from "./schemas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import './login.css'




const initialValues = {
  username: "",
  password: "",
};


const Login = () => {

    const navigate = useNavigate();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
      useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: (data) => {
          // console.log(values);
          alert(
            
               ` ${data.username} ${data.password} `
            
          );

          authService.login(data).then((res) => {
            navigate("/login");
            toast("login successfull", { position: "top-center" });
          });
        },
      });


  return (
    <>
      <div className="">
        <div className="form_">
          <div className="form-body_">
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="username_">
                <label className="form__label_" for="username">
                  Username:{" "}
                </label>
                <input
                  className="form__input_"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.username && touched.username ? (
                  <p className="form-error_">{errors.username}</p>
                ) : null}
              </div>
              
              <div className="password_">
                <label className="form__label_" for="password">
                  Password:{" "}
                </label>
                <input
                  className="form__input_"
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
              
              <div class="footer_">
                <button type="submit" class="btn_" style={{ cursor: "pointer" }}>
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default Login


// import React from 'react'
// import { Box, TextField, Button , styled,} from "@mui/material";
// import authService from './Auth.service';
// import { useFormik } from "formik";
// import { loginSchema } from "./schemas";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";



// const Component = styled(Box)`
//   ${"" /* height: 490px; */}
//   width: 400px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   border-radius: 20px;
//   margin-top:40px;
//   margin-bottom:20px;
//   /* box-shadow: 1px 1px 2px 2px rgba(0,0,0,0.3); */
//   box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
//     rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
// `;


// const Image = styled("img")`
//   width: 100px;
//   ${'' /* height: 100px; */}
//   margin: auto;
//   display: flex;
//   padding: 50px 0 0;
// `;

// const Wrapper = styled(Box)`
//   padding: 25px 35px;
//   display: flex;
//   flex: 1;
//   flex-direction: column;
//   & > div,
//   & > button,
//   & > p {
//     margin-top: 20px;
//   }
// `;

// const CenterBox = styled(Box)`
//   display: flex;
//   padding: 10px;
//   background-color: "red";
//   margin: auto;
//   height: 100%;
//   width: 100;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   overflow-x: hidden;
//   overflow-y: hidden;
// `;

// const LoginButton = styled(Button)`
//   text-transform: none;
//   background: #2af598;
//   display:flex:
//   margin:auto;
//   color: #fff;
//   height: 48px;
//   border-radius: 3px;
// `;

// const initialValues = {
//   username: "",
//   password: "",
// };


// const Login = () => {

//     const navigate = useNavigate();

//     const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//       useFormik({
//         initialValues: initialValues,
//         validationSchema: loginSchema,
//         onSubmit: (data) => {
//           // console.log(values);
//           alert(
            
//                ` ${data.username} ${data.password} `
            
//           );

//           // delete data.id;
//           // delete data.confirmPassword;

//           authService.login(data).then((res) => {
//             navigate("/login");
//             toast("login successfull", { position: "top-center" });
//           });
//         },
//       });


//   return (
//     <>
//       <CenterBox>
//         <Component className="loginBox" style={{ backgroundColor: "" }}>
//           <Box className="imgBox">
//             <Image src='' alt="logo" />
//           </Box>
//           <Wrapper className="inputBox">
//             <TextField label="Username" style={{ width: "350px" }}></TextField>
//             <TextField label="Password"></TextField>
            
//             <LoginButton variant="contained" style={{ width: "" }} onClick={handleSubmit}>
//               Login
//             </LoginButton>
          
//           </Wrapper>
//         </Component>
//       </CenterBox>
//     </>
//   );
// }

// export default Login
