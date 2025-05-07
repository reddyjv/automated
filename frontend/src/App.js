import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import VendorDashboard from "./pages/VendorDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register/:role" element={<Register />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/vendor/dashboard" element={<VendorDashboard />} />
        <Route path="/manager/dashboard" element={<managerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
