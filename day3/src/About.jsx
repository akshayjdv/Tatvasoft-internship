import React from "react";
import './style.css'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const About = (props) => {
  return (
    <>
      <div
        className="center"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <h1>
          hello this is nothing but{" "}
          <span style={{ color: "red" }}>{props.name}</span>{" "}
          <span style={{ color: "pink" }}>page</span>
        </h1>
        <AccountCircleIcon
          style={{ cursor: "pointer" }}
          onClick={() => {
            alert("myself akshay");
          }}
        />
      </div>
    </>
  );
};

export default About;
