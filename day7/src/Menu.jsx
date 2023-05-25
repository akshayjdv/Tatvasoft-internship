import React from "react";
import {  NavLink } from "react-router-dom";
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
