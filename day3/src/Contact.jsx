import React from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";


const Contact = (props) => {
  return (
    <>
    <div className="center" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"70vh"}}>
      <h1>
        welcome to the{" "}
        <span style={{ color: "yellowgreen" }}>{props.name}</span> {" "}
        <span style={{ color: "pink" }}>page </span>
        
      </h1>
        <AccessAlarmIcon style={{cursor:"pointer"}} onClick={()=>{alert("you have to wait for contact")}} />
      </div>
    </>
  );
};

export default Contact;
