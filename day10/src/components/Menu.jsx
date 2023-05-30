import React from "react";
import {  NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
// import "./menu.css";

const Menu = () => {

  const auth = localStorage.getItem('user');

  const navigate = useNavigate();

  useEffect(() => {
    // checks user is login or not
    const auth = localStorage.getItem("user");

    if (auth) {
      // if user is logged in - login page this will navigate to main home page
      navigate("/");
    }
  }, []);

  const logout = () => {
    // clears local storage by this func
    localStorage.clear();
    toast.success("user logout successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    navigate("/login");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ backgroundColor: "rgb(250, 243, 242)" }}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="">
            TatvaSoft
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {auth ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/users">
                      Users |
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/categoris">
                      Categories |
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/books">
                      Books |
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/update-profile">
                      Update Profile |
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/cart">
                      Cart |
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login" onClick={()=>{logout()}}>
                      Logout |
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/login"
                    >
                      Login |
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">
                      Register |
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <ToastContainer/>
    </>
  );
};

export default Menu;


// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------

// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./menu.css";

// const Menu = () => {
//   return (
//     <>
//       <div classNameName="menu_style">
//         <NavLink
//           activeclassNameName="active_className"
//           to="/"
//           style={{ padding: "20px" }}
//         >
//           ABOUT
//         </NavLink>
//         <NavLink
//           activeclassNameName="active_className"
//           to="/contact"
//           style={{ padding: "20px" }}
//         >
//           CONTACT
//         </NavLink>

//         <NavLink
//           activeclassNameName="active_className"
//           to="/name"
//           style={{ padding: "20px" }}
//         >
//           NAME
//         </NavLink>

//         <NavLink
//           activeclassNameName="active_className"
//           to="/service"
//           style={{ padding: "20px" }}
//         >
//           SERVICE
//         </NavLink>
//         <NavLink
//           activeclassNameName="active_className"
//           to="/register"
//           style={{ padding: "20px" }}
//         >
//           REGISTER
//         </NavLink>
//         <NavLink
//           activeclassNameName="active_className"
//           to="/login"
//           style={{ padding: "20px" }}
//         >
//           LOGIN
//         </NavLink>
//       </div>
//     </>
//   );
// };

// export default Menu;


