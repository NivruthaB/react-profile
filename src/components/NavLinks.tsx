import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import React from "react";
import openMenu from "../assets/images/open.svg";
import closeMenu from "../assets/images/close.svg";
import resume from "../assets/nivrutha-balaji-resume.pdf";
import styled from "styled-components";
import { motion } from "framer-motion";

const NavLinks = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [downloading, setDownloading] = useState(false);

    useEffect(() => {
        setDownloading(false);
    }, [downloading]);

    const handleDownload = () => {
        setIsMenuOpen(false);
        setDownloading(true);
        const link = document.createElement("a");
        link.href = resume;
        link.download = "Nivrutha-Balaji-Resume.pdf";
        link.onload = () => {
            link.remove();
            setDownloading(false);
        };
        document.body.appendChild(link);
        link.click();
    };
    return (
        <>
            <button className="dropdown-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                    <img className="closeMenu" src={closeMenu} alt="Close" />
                ) : (
                    <img className="openMenu" src={openMenu} alt="Open" />
                )}
            </button>
            <NavLinksContainer>
                <nav className={`links ${isMenuOpen ? "open" : "closed"}`}>
                    <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                        Home
                    </NavLink>
                    <NavLink to="/#about" onClick={() => setIsMenuOpen(false)}>
                        About
                    </NavLink>
                    <NavLink to="/#experience" onClick={() => setIsMenuOpen(false)}>
                        Experience
                    </NavLink>
                    <NavLink to="/#contact" onClick={() => setIsMenuOpen(false)}>
                        Contact
                    </NavLink>
                    <ButtonContainer>
                        <StyledButton onClick={handleDownload} disabled={downloading}
                            whileHover={{ boxShadow: '3px 4px 1px var(--hl-color)', opacity: 1, transition: { duration: 0.3 } }}
                        >
                            {downloading ? "Downloading..." : "Resume"}
                        </StyledButton>{" "}
                    </ButtonContainer>
                </nav >
            </NavLinksContainer>
        </>
    );
};

export default NavLinks;

const StyledButton = styled(motion.button)`
    white-space: nowrap;
    color: var(--hl-color);
    background-color: transparent;
    border: solid 1px var(--hl-color);
    display: flex;
    justify-content: center;
    padding: 10px 20px;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    opacity: 0.9;
    @media (max-width: 750px) {
        align-items: center;
        margin: 0;
    }
`

const NavLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const ButtonContainer = styled.div`
    display:flex;   
    @media (max-width: 750px) {
        margin-top: 15px;
        justify-content: center;
    }
`
