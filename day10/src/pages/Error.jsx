import React from "react";

import errorlogo from '../img/Error-2.png'


const Error = () => {
  return (
    <>
      {/* <h1>404 Page Not Found</h1> */}
      <div
        className="img"
        style={{display:'flex',width:'50%',height:'50vh',backgroundColor:'',margin:'auto'}}
      >
        <img src={errorlogo} alt="404 Error" />
      </div>
    </>
  );
};

export default Error;
