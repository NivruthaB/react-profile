import NavLinks from "./NavLinks";
import logo from "../assets/images/logo-color.png";
import React from "react";
import { motion } from "framer-motion";
const Header = ({ handleThemeChange }) => {
    return (
        <header>
            <motion.img className="logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: 0.8, scale: 1.2,
                    rotate: [0, 90, 180, 360, -180, -90, 0]
                }}
                whileHover={{
                    opacity: 1,
                    scale: 1.4
                }}
                transition={{ duration: 0.6 }}
                src={logo} alt="Nivrutha Balaji Logo" />
            <NavLinks />
        </header>
    );
};

export default Header;
