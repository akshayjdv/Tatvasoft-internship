import React from "react";
import ReactDOM from "react-dom";

import Footer from "./components/Footer";
import Menu from "./components/Menu";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Menu />
      <App/>
    </BrowserRouter>
    <Footer />
  </>,
  document.getElementById("root")
);
