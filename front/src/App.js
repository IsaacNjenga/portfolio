import React, { createContext, useState, useEffect } from "react";
import {  Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Resume from "./pages/resume";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import { AnimatePresence } from "framer-motion";
export const UserContext = createContext();
function App() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <UserContext.Provider value={{ isMobile, setIsMobile }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="resume" element={<Resume />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </UserContext.Provider>
    </>
  );
}

export default App;
