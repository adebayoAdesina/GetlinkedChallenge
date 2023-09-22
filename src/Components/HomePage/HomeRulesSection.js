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

export const HomeRulesSection = () => {
  return (
    <HomeRulesStyle>
      <Container>
        <Row>
          <LeftSectionStyle className="col-6">
            <Blur
              style={{
                width: "13%",
                transform: "translate(400%,-70%)",
              }}
            />
            <div>
              <TitleSectionStyle>
                <h3 className="pt-1">
                  Rules and{" "}
                  <StarImageStyle
                    src={WhiteStar}
                    alt="colored_star"
                    style={{
                      transform: "translate(600%, 0%)",
                      opacity: "0.6",
                    }}
                  />
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

const HomeRulesStyle = styled.div``;
const LeftSectionStyle = styled.div`
  padding-top: 10%;
  position: relative;
`;
const RightSectionStyle = styled.div``;
