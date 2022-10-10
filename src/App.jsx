import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import AddContact from "./components/AddContact";
import EditCon from "./components/EditCon";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addcontact" element={<AddContact />} />
        <Route exact path="/edit/:id" element={<EditCon />} />
      </Routes>
    </>
  );
};

export default App;
