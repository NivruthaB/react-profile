import { Routes, Route, useLocation } from "react-router-dom";

import Landing from "../pages/landing/Landing";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";
import Experience from "../pages/experience/Experience";
import React from "react";
interface IAnimatedRoutesProps {
  personalDetails: any;
}
const AnimatedRoutes = ({ personalDetails }: IAnimatedRoutesProps) => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" key={1} element={<Landing />} />
      <Route
        path="/about"
        key={2}
        element={
          <About
          />
        }
      />
      <Route path="/portfolio" key={3} element={<Portfolio />} />
      <Route path="/experience" key={4} element={<Experience />} />
      <Route
        path="/contact"
        key={5}
        element={
          <Contact />
        }
      />
    </Routes>
  );
};

export default AnimatedRoutes;
