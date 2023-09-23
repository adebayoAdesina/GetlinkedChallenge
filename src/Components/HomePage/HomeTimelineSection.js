import React from "react";
import { Stepper } from "../Stepper/Stepper";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import useWindowDimensions from "../../utils/GetWindowDimensions";
import { MobileStepper } from "../Stepper/MobileStepper";
import { UseScroll } from "../../utils/UseScroll";
import { ScaleSectionAnimation } from "../../GlobalStyles/Animation";
import { motion } from "framer-motion";

export const HomeTimelineSection = () => {
  const [element, controls] = UseScroll();
  const { width } = useWindowDimensions();
  return (
    <HomeTimelineStyle
      className="pt-5"
      ref={element}
      animate={controls}
      variants={ScaleSectionAnimation}
      initial="hidden"
    >
      <Container>
        <Row>
          <TimelineSectionStyled>
            <h3 className="py-4">Timeline</h3>
            <h6>
              Here is the breakdown of the time we anticipate <br />
              using for the upcoming event.
            </h6>
          </TimelineSectionStyled>
        </Row>
        {width < 1200 ? <MobileStepper /> : <Stepper />}
      </Container>
    </HomeTimelineStyle>
  );
};

const HomeTimelineStyle = styled(motion.div)``;
const TimelineSectionStyled = styled.div`
  text-align: center;
  align-content: center;
  h3 {
    font-family: Clash Display;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 0%;
  }
  div {
    text-align: center;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 172.4%;
  }
`;
