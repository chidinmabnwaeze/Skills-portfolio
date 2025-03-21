import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./admin/Upload";
import Skills from "./admin/Skills";
import Education from "./admin/Education";
import ExperienceAdmin from "./admin/ExperienceAdmin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<ExperienceAdmin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
