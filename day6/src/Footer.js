import React from "react";
import './footer.css'


function Footer()
{
    return (
      <>
        <div
          style={{
            display: "flex",
            width: "100vw",
            alignItems: "center",
            justifyContent: "center",
            alignContent:"center",
            backgroundColor: "#faf3f2",
          }}
        >
          <footer>
            <p >copyright © by Akshay Jadav - BVM - 200070107017</p>
          </footer>
        </div>
      </>
    );
}

export default Footer;