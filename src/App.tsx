import React from "react";
import Home from "./components/Home";
import ContractPage from "./components/contract-page";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contract/:contractID" element={<ContractPage />} />
    </Routes>
  );
};

export default App;
