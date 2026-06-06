import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Services from "../pages/Services";
import News from "../pages/News";
import Jobs from "../pages/Jobs";
import Contact from "../pages/Contact";

export default function AppRouter() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-enter">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
