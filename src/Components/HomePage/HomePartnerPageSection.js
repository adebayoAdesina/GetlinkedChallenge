import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import {
  LibertyCompanyOne,
  LibertyCompanyTwo,
  WinWise,
  WisperLogo,
} from "../../utils/image";

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
        <PartnerImagesStyle className="my-5">
          <Row className="heightSpacing"></Row>
          <Row>
            <div className="col-2"></div>
            <div className="col">
              <Row className="partnerSpacing">
                <LibertyOneLogImage src={LibertyCompanyOne} />
              </Row>
              <Row>
                <VerticalLine />
              </Row>
              <Row className="partnerSpacing">
                <LibertyFourLogImage src={WisperLogo} />
              </Row>
            </div>
            <div className="col px-5">
              <Row>
                <HorizontalLineStyle />
                <div className="partnerSpacing col">
                  <LibertyTwoLogImage src={LibertyCompanyTwo}  className=""/>
                </div>
                <HorizontalLineStyle />
              </Row>
              <Row>
                <VerticalLine />
              </Row>
              <Row className="mt-4">
                <HorizontalLineStyle />
                <div className="partnerSpacing col">
                  <PayBoxStyle>
                    Pay
                    <div>box</div>
                  </PayBoxStyle>
                </div>
                <HorizontalLineStyle />
              </Row>
            </div>
            <div className="col">
              <Row className="partnerSpacing">
                <LibertyThreeLogImage src={WinWise} />
              </Row>
              <Row>
                <VerticalLine />
              </Row>
              <Row className="partnerSpacing">
                <VitualPlusStyle>
                  Vuzual
                  <div>&nbsp;Plus</div>
                </VitualPlusStyle>
              </Row>
            </div>
            <div className="col-2"></div>
          </Row>
        </PartnerImagesStyle>
      </Container>
    </HomePartnerPageStyle>
  );
};

const HomePartnerPageStyle = styled.div`
  .partnerSpacing {
    height: 150px;
    /* align-items: center;
    text-align: center;
    align-self: center; */
    align-content: space-around;
  }
  .heightSpacing {
    height: 120px;
  }
`;
const TimelineSectionStyled = styled.div`
  text-align: center;
`;

const PartnerImagesStyle = styled.div`
  height: 560px;
  border-radius: 5px;
  border: 1px solid #d434fe;
  background: rgba(255, 255, 255, 0.01);
`;

const LibertyOneLogImage = styled.img`
  width: 120.562px;
  height: 113.946px;
`;
const LibertyTwoLogImage = styled.img`
  width: 213.189px;
  height: 40.432px;
`;
const LibertyThreeLogImage = styled.img`
  width: 131.589px;
  height: 107.33px;
`;
const LibertyFourLogImage = styled.img`
  width: 147.027px;
  height: 109.535px;
`;
const VerticalLine = styled.div`
  width: 257.298px;
  height: 4px;
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
  height: 112.476px !important;
  padding: 0;
  color: #d434fe;
  background-color: #d434fe;
`;
