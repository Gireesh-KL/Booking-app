import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/loginPage.jsx";
import Layout from "./layout.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>  
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
