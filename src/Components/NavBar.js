import React from "react";
import styled from "styled-components";
import { CloseCircle, CloseImage, HamburgerImage } from "../utils/image";
import "./NavBarStyle.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "../utils/GetWindowDimensions";

export const NavBar = () => {
  const { width } = useWindowDimensions();
  const [mobileNavbarVisible, setMobileNavbarVisible] = useState(false);

  const toggleMobileNavbar = () => {
    setMobileNavbarVisible(!mobileNavbarVisible);
  };

  const closeMobileNavbar = () => {
    setMobileNavbarVisible(false);
  };

  // const navbarToggle = document.getElementById("navbar-toggle");
  // const mobileNavbar = document.getElementById("mobile-navbar");
  // const closeBtn = document.querySelector(".close-btn");
  //   navbarToggle.addEventListener(
  //     "click",
  //     (onOpen = () => {
  //       if (mobileNavbar.style.display === "none") {
  //         mobileNavbar.style.display = "block";
  //       } else {
  //         mobileNavbar.style.display = "none";
  //       }
  //     })
  //   );

  //   closeBtn.addEventListener(
  //     "click",
  //     (onClose = () => {
  //       if (mobileNavbar.style.display === "block") {
  //         mobileNavbar.style.display = "none";
  //       } else {
  //         mobileNavbar.style.display = "block";
  //       }
  //     })
  //   );

  return (
    <NavBarStyle>
      {width < 900
        ? setMobileNavbarVisible(!mobileNavbarVisible)
        : setMobileNavbarVisible(false)}
      <LogoStyle href="#" class="logo">
        <span class="get">
          get<span class="linked">linked</span>
        </span>
      </LogoStyle>
      <NavLinksContainer>
        <NavLinks>
          <Link>Timeline</Link>
          <Link>Overview</Link>
          <Link>FAQs</Link>
          <Link>Contact</Link>
        </NavLinks>
        <button class="nav-btn">Register</button>
      </NavLinksContainer>
      <img
        src={HamburgerImage}
        alt="hamburger"
        class="hamburger"
        id="navbar-toggle"
      />
      <div id="mobile-navbar" class="mobile-nav-links-container">
        <div id="nav-toggle2" class="close-icon-container">
          <div class="close-btn">
            <img src={CloseCircle} alt="close_button" />
            <img src={CloseImage} alt="close" class="close" />
          </div>
        </div>
        <div class="mobile-nav-links">
          <Link class="mobile-nav-links--link">Timeline</Link>
          <Link class="mobile-nav-links--link">Overview</Link>
          <Link class="mobile-nav-links--link">FAQs</Link>
          <Link class="mobile-nav-links--link">Contact</Link>
        </div>
        <div>
          <button class="mobile-nav-btn">Register</button>
        </div>
      </div>
    </NavBarStyle>
  );
};

const NavBarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  flex: 1;
  border-bottom: 1px solid #ffffff2e;
  align-items: center;
  padding: 2.2rem 12.8rem 1.8%;
  position: relative;
  a {
    font-family: "Montserrat";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    color: var(--white);
    padding-left: 2.5%;
    padding-right: 2.5%;
  }
`;

const LogoStyle = styled.div`
  font-family: "Clash Display";
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  .linked {
    color: #d434fe;
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const NavLinks = styled.div`
  display: flex;
  font-size: 1.6rem;
  min-width: 50rem;
  justify-content: center;
`;
