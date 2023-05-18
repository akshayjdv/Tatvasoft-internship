import React from "react";

const Name = (props) => {
  return (
    <>
      <div className="center" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"70vh"}}>
        <h1>
          welcome to the <span style={{ color: "gold" }}>{props.name}</span>{" "}
          <span style={{ color: "grey" }}>page </span>
        </h1>
      </div>
    </>
  );
};

export default Name;
