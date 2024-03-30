import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthModule from "./pages/AuthModule";
import MainModule from "./pages/MainModule";

export default function App() {
  return (
    <div className="h-screen font-pops bg-hero w-screen overflow-hidden">
      <Router>
        <Routes>
          <Route path="auth" element={<AuthModule />} />
          <Route path="" element={<MainModule />} />
        </Routes>
      </Router>
    </div>
  );
}