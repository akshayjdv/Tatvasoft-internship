import React from "react";

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
      </div>
    </>
  );
};

export default About;
