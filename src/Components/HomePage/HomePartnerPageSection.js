import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import {
  LibertyCompanyOne,
  LibertyCompanyTwo,
  WinWise,
  WisperLogo,
  libertyPaySVG,
  libertySVG,
  payboxSVG,
  visualPlusSVg,
  winWiseSVG,
  wisperSVG,
} from "../../utils/image";
import useWindowDimensions from "../../utils/GetWindowDimensions";

export const HomePartnerPageSection = () => {
  const { width } = useWindowDimensions();
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
        <PartnerImagesStyle className="my-5">
          <Row className="heightSpacing"></Row>

          <Row>
            <div className="col">
              <Row className="partnerSpacing">
                <div className="text-center">
                  <LibertyOneLogImage src={libertySVG} />
                </div>
              </Row>
              <Row>
                <div className="verticalLineCenter">
                  <VerticalLine />
                </div>
              </Row>
              <Row className="partnerSpacing">
                <div className="text-center">
                  <LibertyFourLogImage src={wisperSVG} />
                </div>
              </Row>
            </div>
            <div className="col px-5">
              <Row>
                <HorizontalLineStyle className="" />
                <div className="partnerSpacing col text-center pt-4">
                  <img src={libertyPaySVG} className="libImage" />
                </div>
                <HorizontalLineStyle />
              </Row>
              <Row>
                <VerticalLine />
              </Row>
              <Row className="mt-4 pt-2">
                <HorizontalLineStyle />
                <div className="partnerSpacing col text-center mt-3">
                  <img src={payboxSVG} className="payboxImage" />
                </div>
                <HorizontalLineStyle />
              </Row>
            </div>
            <div className="col">
              <Row className="partnerSpacing">
                <div className=" text-center">
                  <LibertyThreeLogImage src={winWiseSVG} />
                </div>
              </Row>
              <Row>
                <VerticalLine />
              </Row>
              <Row className="partnerSpacing">
                <div className=" text-center">
                  <img src={visualPlusSVg} className="plusImage" />
                </div>
              </Row>
            </div>
          </Row>
        </PartnerImagesStyle>
      </Container>
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
  /* width: 120.562px;
  height: 113.946px; */
  width: 30%;
  @media only screen and (max-width: 899px) {
    width: 100%;
  }
`;
const LibertyTwoLogImage = styled.img`
  width: 60%;
  @media only screen and (max-width: 899px) {
    width: 60%;
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

const PayBoxStyle = styled.div`
  color: #fff;
  font-family: Typo Hoop Demo;
  font-size: 51px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.5px;
  display: flex;
  div {
    color: #00a3ff;
    font-family: Typo Hoop Demo;
    font-size: 51px;
    font-style: normal;
    font-weight: 400;
    line-height: 27.5px;
  }
`;

const VitualPlusStyle = styled.div`
  color: #fff;
  font-family: Voces;
  font-size: 41px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.5px;
  display: flex;
  div {
    color: #f00;
    font-family: Volkhov;
    font-size: 41px;
    font-style: normal;
    font-weight: 400;
    line-height: 27.5px;
  }
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
