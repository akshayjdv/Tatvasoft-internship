import React from "react";
import AddReactionIcon from "@mui/icons-material/AddReaction";

const Service = (props) => {
  const click = () =>{
    alert("you are happy with our services??");
  }
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
          welcome to the <span style={{ color: "purple" }}>{props.name}</span>{" "}
          <span style={{ color: "brown" }}>page </span>
        </h1>
          <AddReactionIcon
            style={{ cursor: "pointer" }}
            onClick={() => {
              click();
            }}
          />
      </div>
    </>
  );
};

export default Service; 
