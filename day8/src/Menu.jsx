// import React from "react";
// import {  NavLink } from "react-router-dom";
// import "./menu.css";

// const Menu = () => {
//   return (
//     <>
      

//   <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
//   <div className="container-fluid">
//     <NavLink className="navbar-brand" href="#">Navbar</NavLink>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>


//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <NavLink className="nav-link" aria-current="page" to='/'>About</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link" aria-current="page" to='/contact'>Contact</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link " aria-current="" to='/service'>Service</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link" aria-current="page" to='/name'>Name</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link" to='/register'>Register</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link" to='/login'>Login</NavLink>
//         </li>
        
        
//       </ul>
//       <form className="d-flex">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
      
//     </>
//   );
// };

// export default Menu;


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

import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  return (
    <>
      <div className="menu_style">
        <NavLink
          activeClassName="active_class"
          to="/"
          style={{ padding: "20px" }}
        >
          ABOUT
        </NavLink>
        <NavLink
          activeClassName="active_class"
          to="/contact"
          style={{ padding: "20px" }}
        >
          CONTACT
        </NavLink>

        <NavLink
          activeClassName="active_class"
          to="/name"
          style={{ padding: "20px" }}
        >
          NAME
        </NavLink>

        <NavLink
          activeClassName="active_class"
          to="/service"
          style={{ padding: "20px" }}
        >
          SERVICE
        </NavLink>
        <NavLink
          activeClassName="active_class"
          to="/register"
          style={{ padding: "20px" }}
        >
          REGISTER
        </NavLink>
        <NavLink
          activeClassName="active_class"
          to="/login"
          style={{ padding: "20px" }}
        >
          LOGIN
        </NavLink>
      </div>
    </>
  );
};

export default Menu;


