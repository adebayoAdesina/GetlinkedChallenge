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

  return (
    <NavBarStyle>
      <LogoStyle href="#" class="logo">
        <span class="get">
          get<span class="linked">linked</span>
        </span>
      </LogoStyle>
      {width > 1200 ? (
        <>
          <NavLinksContainer>
            <NavLinks>
              <Link>Timeline</Link>
              <Link>Overview</Link>
              <Link>FAQs</Link>
              <Link>Contact</Link>
            </NavLinks>
            <button class="nav-btn">Register</button>
          </NavLinksContainer>{" "}
        </>
      ) : (
        <>
          <img
            src={HamburgerImage}
            alt="hamburger"
            class="hamburger"
            id="navbar-toggle"
            onClick={toggleMobileNavbar}
          />
          {mobileNavbarVisible === true ? (
            <div id="mobile-navbar" class="mobile-nav-links-container">
              <div id="nav-toggle2" class="close-icon-container">
                <div class="close-btn">
                  <img
                    src={CloseCircle}
                    alt="close_button"
                    onClick={closeMobileNavbar}
                  />
                  <img src={CloseImage} alt="close" class="close" onClick={closeMobileNavbar} />
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
          ) : (
            ""
          )}{" "}
        </>
      )}
    </NavBarStyle>
  );
};

const NavBarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  flex: 1;
  border-bottom: 1px solid #ffffff2e;
  align-items: center;
  padding: 2.2% 8% 1.8%;
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
