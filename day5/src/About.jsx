import React, { useState } from "react";
import './style.css'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { makeStyles } from "@mui/styles";

// make style is a class that makes objects
// useStyle is a hook that returns this objects, call useStyle inside component, store it in a referance vaariable, call that referance variable name with dot operator to get corresponding class, and put all those to classname to get its effect

const useStyle = makeStyles((theme)=> ({
  btnIncr : {
    // fontWeight : 30,
    padding : 10,
    borderRadius: 3,
    backgroundColor : 'green',
    color : 'white'
  },
  btnDcrm : {
    // fontWeight : 320,
    borderRadius: 3,
    backgroundColor : 'red',
    color : 'white'
  }
}));

const About = (props) => {

  // use state to change the value of num - change its state
  let [number, setNumber] = useState(0);

  // useStyle to use classes of makestyle
  const classes = useStyle();//invoking hook

  // increment function for useState hook
  const incr = () =>{
    setNumber(number+1);
  }
  
  // decrement function for useState hook
  const dcrm = () =>{
    if(number <= 0)
    {
      number = 0;
    }
    else{
      setNumber(number-1);
    }
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
        <div className="box">
          <h1>{number}</h1>
          <div className="horizontal">
            {/* on click thi func call krvani 2 rit */}

            <button
              style={{ margin: "10px", cursor: "pointer" }}
              onClick={() => incr()}
              className={classes.btnIncr}
            >
              increment
            </button>
            <button
              style={{ margin: "10px", cursor: "pointer" }}
              onClick={dcrm}
              className={classes.btnDcrm}
            >
              decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
