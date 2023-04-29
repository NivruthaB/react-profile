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
      <Route path="/" element={<Landing name={personalDetails.name} />} />
      <Route
        path="/#about"
        element={
          <About
            name={personalDetails.name}
            location={personalDetails.location}
            email={personalDetails.email}
            availability={personalDetails.availability}
            brand={personalDetails.brand}
          />
        }
      />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/#experience" element={<Experience />} />
      <Route
        path="/#contact"
        element={
          <Contact name={personalDetails.name} location={personalDetails.location} email={personalDetails.email} />
        }
      />
    </Routes>
  );
};

export default AnimatedRoutes;
