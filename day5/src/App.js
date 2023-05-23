import React from "react";
import Contact from "./Contact";
import About from "./About";
import Name from "./Name"
import Service from "./Service";
import RegistrationForm from "./RegistrationForm";


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
      </Routes>
    </>
  );
};

export default App;