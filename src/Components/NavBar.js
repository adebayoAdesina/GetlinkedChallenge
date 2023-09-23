import React from "react";
import styled from "styled-components";
import { CloseCircle, CloseImage, HamburgerImage } from "../utils/image";
import "./NavBarStyle.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useWindowDimensions from "../utils/GetWindowDimensions";
import { Container } from "react-bootstrap";

export const NavBar = () => {
  const { width } = useWindowDimensions();
  const [mobileNavbarVisible, setMobileNavbarVisible] = useState(false);

  const toggleMobileNavbar = () => {
    setMobileNavbarVisible(!mobileNavbarVisible);
  };

  const closeMobileNavbar = () => {
    setMobileNavbarVisible(false);
  };

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <NavSectionStyle>
      <Container>
        <NavBarStyle>
          <Link to="/">
            <LogoStyle className="logo">
              <span className="get">
                get<span className="linked">linked</span>
              </span>
            </LogoStyle>
          </Link>
          {width > 1200 ? (
            <>
              <NavLinksContainer>
                <NavLinks>
                  <Link>Timeline</Link>
                  <Link>Overview</Link>
                  <Link>FAQs</Link>
                  {currentPath === "/contact" ? (
                    <Link to={"/contact"} className="selected-contact">
                      Contact
                    </Link>
                  ) : (
                    <Link to={"/contact"}>Contact</Link>
                  )}
                </NavLinks>
                <Link to={"/register"}>
                  {currentPath === "/register" ? (
                    <button className="selected-nav-btn">Register</button>
                  ) : (
                    <button className="nav-btn">Register</button>
                  )}
                </Link>
              </NavLinksContainer>{" "}
            </>
          ) : (
            <>
              <img
                src={HamburgerImage}
                alt="hamburger"
                className="hamburger"
                id="navbar-toggle"
                onClick={toggleMobileNavbar}
              />
              {mobileNavbarVisible === true ? (
                <div id="mobile-navbar" className="mobile-nav-links-container">
                  <div id="nav-toggle2" className="close-icon-container">
                    <div className="close-btn">
                      <img
                        src={CloseCircle}
                        alt="close_button"
                        onClick={closeMobileNavbar}
                      />
                      <img
                        src={CloseImage}
                        alt="close"
                        className="close"
                        onClick={closeMobileNavbar}
                      />
                    </div>
                  </div>
                  <div className="mobile-nav-links">
                    <Link className="mobile-nav-links--link">Timeline</Link>
                    <Link className="mobile-nav-links--link">Overview</Link>
                    <Link className="mobile-nav-links--link">FAQs</Link>
                    {currentPath === "/contact" ? (
                      <Link to={"/contact"} className="mobile-nav-links--link-active">
                        Contact
                      </Link>
                    ) : (
                      <Link to={"/contact"} className="mobile-nav-links--link">Contact</Link>
                    )}
                  </div>
                  <div>
                    <Link to={"/register"}>
                      {currentPath === "/register" ? (
                        <button className="mobile-nav-btn-active">
                          Register
                        </button>
                      ) : (
                        <button className="mobile-nav-btn">Register</button>
                      )}
                    </Link>
                  </div>
                </div>
              ) : (
                ""
              )}{" "}
            </>
          )}
        </NavBarStyle>
      </Container>
    </NavSectionStyle>
  );
};

const NavSectionStyle = styled.div`
  border-bottom: 1px solid #ffffff2e;
`;

const NavBarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  flex: 1;

  align-items: center;
  padding: 2.2% 0% 1.8% 0%;
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
