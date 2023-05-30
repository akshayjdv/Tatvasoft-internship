import React from "react";
import Error from "./pages/Error";
import Login from "./pages/Login";
import RegistrationForm from "./pages/RegistrationForm";




// routing mate
import { Route, Routes } from "react-router-dom";
import BookGrid from "./pages/BookGrid";
import Users from "./pages/Users";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BookGrid/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/register" element={<RegistrationForm name="REGISTER" />} />
        <Route path="/login" element={<Login name="LOGIN" />} />
        <Route path="*" element={<Error name="ERROR" />} />
      </Routes>
    </>
  );
};

export default App;
