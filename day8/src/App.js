import React from "react";
import Contact from "./Contact";
import About from "./About";
import Name from "./Name"
import Service from "./Service";
import RegistrationForm from "./RegistrationForm";
import Login from "./Login";
import Error from "./Error";


// routing mate
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<About name="ABOUT" />} />
        <Route path="/contact" element={<Contact name="CONTACT" />} />
        <Route path="/name" element={<Name name="NAME" />} />
        <Route path="/service" element={<Service name="SERVICE" />} />
        <Route path="/register" element={<RegistrationForm name="REGISTER" />} />
        <Route path="/login" element={<Login name="LOGIN" />} />
        <Route path="*" element={<Error name="ERROR" />} />
      </Routes>
    </>
  );
};

export default App;
