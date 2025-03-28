import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./admin/Profile";
import CreateAccount from "./admin/createAccount";
import Skills from "./admin/Skills";
import Education from "./admin/Education";
import ExperienceAdmin from "./admin/ExperienceAdmin";
import Projects from "./admin/Projects";
import Documents from "./admin/Documents";
import Login from "./admin/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<ExperienceAdmin />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
