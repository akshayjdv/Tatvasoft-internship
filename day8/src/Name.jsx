import React from "react";
import ControlPointSharpIcon from "@mui/icons-material/ControlPointSharp";

const Name = (props) => {
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
          welcome to the <span style={{ color: "gold" }}>{props.name}</span>{" "}
          <span style={{ color: "grey" }}>page </span>
        </h1>
          <ControlPointSharpIcon
            style={{ cursor: "pointer" }}
            onClick={() => {
              alert("Add your Name here");
            }}
          />
      </div>
    </>
  );
};

export default Name;
