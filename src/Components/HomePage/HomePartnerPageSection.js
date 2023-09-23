import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import {
  libertyPaySVG,
  libertySVG,
  payboxSVG,
  visualPlusSVg,
  winWiseSVG,
  wisperSVG,
} from "../../utils/image";
import { Blur } from "../../GlobalStyles/GlobalStyles";

export const HomePartnerPageSection = () => {
  return (
    <HomePartnerPageStyle>
      <Container>
        <Row>
          <TimelineSectionStyled>
            <h3 className="py-3">Partners and Sponsors</h3>
            <h6>
              Getlinked Hackathon 1.0 is honored to have the following major{" "}
              <br />
              companies as its partners and sponsors
            </h6>
          </TimelineSectionStyled>
        </Row>
        <Blur
          style={{
            transform: "translate(-25rem, -5rem)",
          }}
        />
        <PartnerImagesStyle className="my-5">
          <Row className="heightSpacing"></Row>

          <Row>
            <div className="col">
              <Row className="partnerSpacing">
                <div className="text-center">
                  <LibertyOneLogImage src={libertySVG} alt="liberty_svg" />
                </div>
              </Row>
              <Row>
                <div className="verticalLineCenter">
                  <VerticalLine />
                </div>
              </Row>
              <Row className="partnerSpacing">
                <div className="text-center">
                  <LibertyFourLogImage src={wisperSVG} alt="wisper_svg" />
                </div>
              </Row>
            </div>
            <div className="col px-5">
              <Row>
                <HorizontalLineStyle className="" />
                <div className="partnerSpacing col text-center pt-4">
                  <img
                    src={libertyPaySVG}
                    className="libImage"
                    alt="liberty_pay_svg"
                  />
                </div>
                <HorizontalLineStyle />
              </Row>
              <Row>
                <VerticalLine />
              </Row>
              <Row className="mt-4 pt-2">
                <HorizontalLineStyle />
                <div className="partnerSpacing col text-center mt-3">
                  <img
                    src={payboxSVG}
                    className="payboxImage"
                    alt="paybox_svg"
                  />
                </div>
                <HorizontalLineStyle />
              </Row>
            </div>
            <div className="col">
              <Row className="partnerSpacing">
                <div className=" text-center">
                  <LibertyThreeLogImage src={winWiseSVG} alt="winwise_svg" />
                </div>
              </Row>
              <Row>
                <VerticalLine />
              </Row>
              <Row className="partnerSpacing">
                <div className=" text-center">
                  <img
                    src={visualPlusSVg}
                    className="plusImage"
                    alt="visualplus_svg"
                  />
                </div>
              </Row>
            </div>
            <Blur
              style={{
                transform: "translate(50rem, 20rem)",
              }}
            />
          </Row>
        </PartnerImagesStyle>
      </Container>
      <Row className="p-5 m-5"></Row>
    </HomePartnerPageStyle>
  );
};

const HomePartnerPageStyle = styled.div`
  .partnerSpacing {
    height: 10rem;
    align-content: space-around;
  }
  .heightSpacing {
    height: 20%;
  }
  .verticalLineCenter {
    justify-content: center;
    text-align: center;
    align-items: center;
    align-content: space-around !important;
  }
  .payboxImage,
  .libImage,
  .plusImage {
    width: 50%;
  }
  @media only screen and (max-width: 899px) {
    .payboxImage,
    .libImage,
    .plusImage {
      width: 100%;
    }
  }
`;
const TimelineSectionStyled = styled.div`
  text-align: center;
`;

const PartnerImagesStyle = styled.div`
  padding: 7% 5% 4% 5%;
  border-radius: 5px;
  border: 1px solid #d434fe;
  background: rgba(255, 255, 255, 0.01);
`;

const LibertyOneLogImage = styled.img`
  width: 30%;
  @media only screen and (max-width: 899px) {
    width: 100%;
  }
`;
const LibertyThreeLogImage = styled.img`
  width: 30%;
  @media only screen and (max-width: 899px) {
    width: 60%;
  }
`;
const LibertyFourLogImage = styled.img`
  width: 30%;
  @media only screen and (max-width: 899px) {
    width: 70%;
  }
`;
const VerticalLine = styled.div`
  width: 70%;
  height: 4px;
  margin-left: auto;
  margin-right: auto;
  color: #d434fe;
  background-color: #d434fe;
`;

const HorizontalLineStyle = styled.div`
  width: 4px !important;
  height: 112.476px;
  padding: 0;
  color: #d434fe;
  background-color: #d434fe;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 899px) {
    height: 90px;
  }
`;
