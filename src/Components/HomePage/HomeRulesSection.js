import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import {
  TitleSectionStyle,
  SubTitleSectionStyle,
  Blur,
  StarImageStyle,
} from "../../GlobalStyles/GlobalStyles";
import { RulesImage, WhiteStar } from "../../utils/image";
import { UseScroll } from "../../utils/UseScroll";
import { motion } from "framer-motion";
import { LeftSlideAnimation } from "../../GlobalStyles/Animation";

export const HomeRulesSection = () => {
  const [element, controls] = UseScroll();
  return (
    <HomeRulesStyle ref={element}
    animate={controls}
    variants={LeftSlideAnimation}
    initial="hidden">
      <Container>
        <Row className="reverseFlex">
          <LeftSectionStyle className="col-6">
            <Blur
              style={{
                width: "13%",
                transform: "translate(400%,-70%)",
              }}
            />
            <div>
                  <StarImageStyle
                    src={WhiteStar}
                    alt="colored_star"
                    style={{
                      transform: "translate(600%, 0%)",
                      opacity: "0.6",
                    }}
                  />
              <TitleSectionStyle>
                <h3 className="pt-1">
                  Rules and
                </h3>
                <h3 className="pt-3">Guidelines</h3>
              </TitleSectionStyle>
              <SubTitleSectionStyle className="pt-4">
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </SubTitleSectionStyle>
            </div>
          </LeftSectionStyle>
          <RightSectionStyle className="col-6">
            <div className="col">
              <img src={RulesImage} alt="rules_image" className="col-12" />
              <StarImageStyle
                src={WhiteStar}
                alt="colored_star"
                style={{
                  transform: "translate(0%, -500%)",
                }}
              />
            </div>
            <Blur
              style={{
                width: "13%",
                opacity: "0.6",
                transform: "translate(300%,-150%)",
              }}
            />
          </RightSectionStyle>
        </Row>
      </Container>
    </HomeRulesStyle>
  );
};

const HomeRulesStyle = styled(motion.div)`
  @media only screen and (max-width: 1200px) {
    .reverseFlex {
      display: flex !important;
      flex-direction: column-reverse !important;
    }
  }
`;
const LeftSectionStyle = styled.div`
  padding-top: 10%;
  position: relative;
  @media only screen and (max-width: 1200px) {
    padding-top: 1%;
    padding-bottom: 10%;
    width: 100%;
    text-align: center;
  }
`;
const RightSectionStyle = styled.div`
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;
