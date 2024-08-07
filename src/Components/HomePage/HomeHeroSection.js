import React, { useState, useEffect } from "react";
import { Row, Container } from "react-bootstrap";
import styled from "styled-components";
import {
  CreativeImage,
  StarImage,
  WhiteStar,
  ChainImageURL,
  BoomImageURL,
} from "../../utils/image";
import { Blur, StarImageStyle } from "../../GlobalStyles/GlobalStyles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FadeAnimation, FadeSectionAnimation, ScaleAnimation } from "../../GlobalStyles/Animation";
import { UseScroll } from "../../utils/UseScroll";
import HeroImageURL from '../../images/hero-image.png'

export const HomeHeroSection = () => {
  // const HeroImageURL =
  //   "https://s3-alpha-sig.figma.com/img/2cea/d700/cfbd4eb06b68c33fac2a89295904df2c?Expires=1696204800&Signature=Pl8bxQP7ZWA8IQ~PcHxowSaaCsU8KsCWsjtAdV6WbycHB9CRSS3HmiUrIoLq7x8FSDNA5qhlVqpaF9PjBCB7vHkotMawDRLRihUUfrQSiMjhzG1sXACFmEqCbgbAOnmThDsh05K5hvMNlu0aZjKfhaWi3WigTfEpzQu79zcsA-xggSvAG3k5-pvQEoXQiViO6zISNYUBUgSoT6iO4SJ7jwGKZOA1tL3MGCzbwMyaTEqn8yLde~kSrWX34kogEmUFU9ziDrla9dgaxjRFUFtuDiw2J5NKDjGqV5QjoAQwb~SsNsFDcCq3Jq76s-4WdTGa2vBih1ibhsrAHsdeW0m6xg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

  const AnimateHeroContainer = {
    hidden: { x: -300 },
    show: {
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 1,
        when: "beforeChildren",
      },
    },
  };

  const [element, controls] = UseScroll();

  const [date, setDate] = useState({
    hour: "",
    min: "",
    sec: "",
  })

  useEffect(() => {
    
  setDate({
    hour: new Date().getHours(),
    min: new Date().getMinutes(),
    sec: new Date().getSeconds(),
  })
    
  }, [date])
  
  return (
    <Container>
      <HomeHeroSectionStyled ref={element}
    animate={controls}
    variants={FadeSectionAnimation}
    initial="hidden">
        <Row>
          <LeftHeroSection className="col-6">
            <StarImageStyle
              src={WhiteStar}
              alt="colored_star"
              style={{
                transform: "translate(250%, 300%)",
              }}
            />
            <Blur />
            <motion.div
              variants={AnimateHeroContainer}
              initial="hidden"
              animate="show"
            >
              <div className="heroSetStyle">
                <CreativeStyle src={CreativeImage} alt="creative" />
                <GetLinkedStyled
                  variants={FadeAnimation}
                  initial="hidden"
                  animate="show"
                >
                  getlinked Tech
                </GetLinkedStyled>

                <HackathonStyled className="m-0 p-0" variants={FadeAnimation}>
                  Hackathon&nbsp;
                  <div className="hackImages">
                    <div>&nbsp; 1.0 </div>
                    <img src={ChainImageURL} alt="chain" />
                    <img src={BoomImageURL} alt="boom" />
                  </div>
                </HackathonStyled>
              </div>
              <Row>
                <ParticipationStyle variants={FadeAnimation}>
                  Participate in getlinked tech Hackathon 2023 stand
                  <br />a chance to win a Big prize
                </ParticipationStyle>
              </Row>
              <Row className="pt-4 centerReg">
                <Link to={"/register"}>
                  <RegisterButtonStyle>Register</RegisterButtonStyle>
                </Link>
              </Row>
              <StarImageStyle
                src={WhiteStar}
                alt="colored_star"
                style={{
                  transform: "translate(1500%, -150%)",
                  opacity: "0.6",
                }}
              />
              <Row className="centerReg">
                <HeroTimeSectionStyle>
                  <h3>{date.hour}</h3>
                  <h6>h</h6>
                  <h3>{date.min}</h3>
                  <h6>m</h6>
                  <h3>{date.sec}</h3>
                  <h6>s</h6>
                </HeroTimeSectionStyle>
              </Row>
            </motion.div>
          </LeftHeroSection>
          <RightSectionStyled className="col-6">
            <Blur
              style={{
                transform: "translate(85%, 80%)",
                width: "40%",
                height: "240px",
              }}
            />
            <motion.div variants={ScaleAnimation} initial="hidden" animate="show">
              <StarImageStyle
                src={WhiteStar}
                alt="colored_star"
                style={{
                  transform: "translate(800%, 150%)",
                  opacity: "0.6",
                }}
              />
              <img src={HeroImageURL} alt="person_image" id="personImage" />
              <img src={StarImage} alt="star" id="starImage" />
            </motion.div>
          </RightSectionStyled>
        </Row>
      </HomeHeroSectionStyled>
    </Container>
  );
};

const HomeHeroSectionStyled = styled(motion.div)`
  padding-top: 3%;
  padding-bottom: 0;
  margin-bottom: 0;
  .heroSetStyle {
    transform: translateY(20%);
  }
  .hackImages {
    display: inline-flex;
    div {
      transform: translateY(-50%);
    }
  }
  @media only screen and (max-width: 1200px) {
    display: block;
    .centerReg {
      justify-content: center !important;
      text-align: center !important;
    }
    .hackImages {
      display: inline-flex;
      div {
        transform: translateY(00%);
      }
    }
    .heroSetStyle {
      transform: translateY(0%);
    }
  }
`;
const LeftHeroSection = styled.div`
  padding-top: -2%;
  /* position: relative; */
  /* z-index: 1; */
  transform: translateY(-10%);
  width: 50%;

  @media only screen and (max-width: 1200px) {
    width: 100% !important;
    padding-left: 4%;
    padding-top: 0%;
    div {
      /* position: relative;  */
      transform: translateY(10%);
    }
  }
`;
const GetLinkedStyled = styled(motion.div)`
  font-family: Clash Display;
  font-size: 80px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  @media only screen and (max-width: 1200px) {
    font-size: 3rem;
    text-align: center;
  }
`;

const HackathonStyled = styled(motion.div)`
  color: #fff;
  font-family: Clash Display;
  font-size: 80px;
  display: flex;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  div {
    color: #d434fe;
    font-family: Clash Display;
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    img {
      width: 86px;
      height: 86px;
    }
  }
  @media only screen and (max-width: 1200px) {
    font-size: 3rem;
    text-align: center;
    justify-content: center;
    div {
      font-size: 3rem;
      transform: translateY(-3%);
      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`;

const ParticipationStyle = styled(motion.div)`
  color: #fff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 166%;
  @media only screen and (max-width: 1200px) {
    font-size: 1rem;
    text-align: center;
  }
`;
const RegisterButtonStyle = styled.button`
  width: 172px;
  height: 53px;
  flex-shrink: 0;
  border-radius: 4px;
  color: white;
  background: linear-gradient(
    270deg,
    #903aff 0%,
    #d434fe 56.42%,
    #ff26b9 99.99%,
    #fe34b9 100%
  );
  border-radius: 4px;
  border: none;
  @media only screen and (max-width: 1200px) {
    justify-content: center !important;
    text-align: center !important;
  }
`;

const RightSectionStyled = styled.div`
  transform: translate(-10%,2%);

  div {
    display: flex;
    transform: translateY(-22%);
    #personImage {
      float: right;
      flex-shrink: 0;
      width: 150%;
      background-blend-mode: luminosity;
    }
    #starImage {
      width: 120%;
      position: absolute;
      background-blend-mode: hard-light;
      transform: translate(10%, 0);
      opacity: 8;
    }
  }
  @media only screen and (max-width: 900px) {
    position: relative;
    transform: translate(0%, 4.8%);
    #personImage {
      width: 150% !important;
      background-blend-mode: luminosity;
    }
    #starImage {
      width: 100% !important;
      position: absolute;
      background-blend-mode: hard-light;
      transform: translate(10%, 0);
      opacity: 8;
    }
  }
  @media only screen and (min-width: 899px) and (max-width: 1200px) {
    position: relative;
    transform: translate(18%,2.2%);
  }
`;

const HeroTimeSectionStyle = styled.div`
  display: flex;
  padding-top: 10%;
  h3 {
    font-family: Unica One;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: 133%; /* 85.12px */
  }
  h6 {
    padding-top: 50px;
    padding-right: 40px;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 133%;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 2rem;
    justify-content: center !important;
    text-align: center !important;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
`;

const CreativeStyle = styled.img`
  width: 53px;
  height: 73px;
  transform: translateX(1000%);
  @media only screen and (max-width: 1200px) {
    transform: translateX(700%);
  }
`;
