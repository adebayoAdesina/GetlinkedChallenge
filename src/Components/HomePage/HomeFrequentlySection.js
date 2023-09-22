import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import {
  SubTitleSectionStyle,
  TitleSectionStyle,
  FloatStarRight,
  ColoredStarStyle,
  StarImageStyle,
  Blur,
} from "../../GlobalStyles/GlobalStyles";
import { ColoredStar, QuestionImage, WhiteStar } from "../../utils/image";

import FaqToggle from "../Faqtoggle";

export const HomeFrequentlySection = () => {
  const FaqList = [
    `Can I work on a project I started before the hackathon?`,
    `What happens if I need help during the hackathon?`,
    `What happens if I don't have an idea for a project?`,
    `Can I join a team or do I have to come with one?`,
    `What happens after the hackathon ends`,
    `Can I work on a project I started before the hackathon?`,
  ];
  return (
    <HomeFrequentlyStyle>
      <Container className="py-5">
        <Row>
          <LeftSectionStyle className="col-6">
            <StarImageStyle
              src={WhiteStar}
              alt="colored_star"
              style={{
                transform: "translate(0%,-80%)",
              }}
            />

            <TitleSectionStyle>
              <h3 className="pt-1">Frequently Ask</h3>
              <h3 className="pt-3">Question</h3>
            </TitleSectionStyle>
            <SubTitleSectionStyle className="pt-4">
              We got answers to the questions that you might want to ask
              about getlinked Hackathon 1.0
            </SubTitleSectionStyle>
            <div className="pt-5">
              {FaqList.length !== 0
                ? FaqList.map((e, i) => (
                    <FaqToggle title={e}>
                      <div className="answer">
                        <p>..................................</p>
                      </div>
                    </FaqToggle>
                  ))
                : ""}
            </div>
          </LeftSectionStyle>
          <RightSectionStyle className="col-6">
            <Blur
              style={{
                width: "7%",
                transform: "translate(350%,-80%)",
              }}
            />
            <div className="col">
              <Row>
                <QuestionTextStyle>
                  <div>?</div>
                  <div>?</div>
                  <ColoredStarStyle src={ColoredStar} alt="color_star" />
                  <div>?</div>
                </QuestionTextStyle>
              </Row>
              <StarImageStyle
                src={ColoredStar}
                alt="colored_star"
                style={{
                  transform: "translate(150%,200%)",
                  opacity: "0.4",
                }}
              />
              <img src={QuestionImage} alt="rules_image" className="col-12" />
              <Row>
                <FloatStarRight>
                  <StarImageStyle src={WhiteStar} alt="colored_star" />
                </FloatStarRight>
              </Row>
            </div>
          </RightSectionStyle>
        </Row>
      </Container>
    </HomeFrequentlyStyle>
  );
};

const HomeFrequentlyStyle = styled.div``;
const LeftSectionStyle = styled.div`
  padding-top: 10%;
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;
const RightSectionStyle = styled.div`
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }`;
const QuestionTextStyle = styled.div`
  display: flex;
  transform: translate(15%, 80px);
  div:nth-child(1),
  div:nth-child(4) {
    width: 114px;
    height: 71px;
    color: #a866fd;
    font-family: MADE TOMMY Outline;
    font-size: 96px;
    font-style: normal;
    font-weight: 500;
    line-height: 27.5px;
  }

  div:nth-child(2) {
    transform: translate(5%, -50px);
    width: 114px;
    height: 71px;
    color: #d434fe;
    font-family: MADE TOMMY Outline;
    font-size: 128px;
    font-style: normal;
    font-weight: 500;
    line-height: 27.5px; /* 21.484% */
  }
`;
