import React from "react";

const Contact = (props) => {
  return (
    <>
    <div className="center" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"70vh"}}>
      <h1>
        welcome to the{" "}
        <span style={{ color: "yellowgreen" }}>{props.name}</span> {" "}
        <span style={{ color: "pink" }}>page </span>
      </h1>
      </div>
    </>
  );
};

export default Contact;
