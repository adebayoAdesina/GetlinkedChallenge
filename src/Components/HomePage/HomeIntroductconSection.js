import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { ArrowIcon, BigIdealImage, ColoredStar } from "../../utils/image";
import {
  TitleSectionStyle,
  SubTitleSectionStyle,
  ColoredStarStyle,
} from "../../GlobalStyles/GlobalStyles";
import { UseScroll } from "../../utils/UseScroll";
import { ScaleSectionAnimation } from "../../GlobalStyles/Animation";
import { motion } from "framer-motion";

export const HomeIntroductionSection = () => {
  const [element, controls] = UseScroll();
  return (
    <HomeIntroductionStyle ref={element}
    animate={controls}
    variants={ScaleSectionAnimation}
    initial="hidden">
      <Container>
        <Row>
          <LeftSectionStyle className="col-6">
            <Row>
              <div className="col-2">
                <ColoredStarStyle
                  src={ColoredStar}
                  alt="color_star"
                  style={{
                    transform: "translate(70%, 450%)",
                  }}
                />
              </div>
              <ImageTextStyle className="col">
                <img src={BigIdealImage} alt="big_idea" />
                <div>
                  The Big
                  <br />
                  Idea!
                </div>
                <div className="rotateDiv">
                  <img src={ArrowIcon} alt="arrow_icon" id="arrow" />
                </div>
              </ImageTextStyle>
              <div className="col-2"></div>
            </Row>
          </LeftSectionStyle>
          <RightSectionStyle className="col-6">
            <TitleSectionStyle>
              <h3 className="pt-1">
                Introduction to getlinked{" "}
                <ColoredStarStyle
                  src={ColoredStar}
                  alt="colored_star"
                  style={{
                    transform: "translate(1000%, 80%)",
                  }}
                />
              </h3>
              <h3 className="pt-3">tech Hackathon 1.0</h3>
            </TitleSectionStyle>
            <SubTitleSectionStyle className="pt-4">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </SubTitleSectionStyle>
          </RightSectionStyle>
        </Row>
      </Container>
    </HomeIntroductionStyle>
  );
};

const HomeIntroductionStyle = styled(motion.div)`
  padding-top: 1%;
  padding-bottom: 2%;
  background: #140d27;
`;

const LeftSectionStyle = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
    transform: translate(-20%, 0%);
  }
 

`;

const ImageTextStyle = styled.div`
  display: flex;
  position: relative;
  img {
    position: absolute;
    width: 490px;
    height: 477px;
  }
  div {
    transform: translate(195px, 230px);
    text-align: center;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 122.5%;
  }

  .rotateDiv {
    transform: rotate(-70.92deg);
    margin-top: 450px;
    margin-left: 90%;
    padding-bottom: 0 !important;
  }

  .rotateDiv #arrow {
    position: absolute;
    width: 49.43px;
    height: 57.974px;
  }
  @media only screen and (max-width: 1200px) {
    transform: translateX(13%);
    padding-top: 30px;
    img {
      width: 380px;
      height: 370px;
    }
    div {
    transform: translate(160px, 185px);
    text-align: center;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 122.5%;
  }
  .rotateDiv {
    transform: rotate(-70.92deg);
    margin-top: 400px;
    margin-left: 90%;
    padding-bottom: 0 !important;
  }
  }
`;

const RightSectionStyle = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 10%;
  @media only screen and (max-width: 1200px) {
    width: 100%;
    text-align: center;
  }
`;
