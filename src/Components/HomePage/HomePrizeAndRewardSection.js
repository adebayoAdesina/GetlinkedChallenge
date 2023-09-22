import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import {
  SubTitleSectionStyle,
  TitleSectionStyle,
} from "../../GlobalStyles/GlobalStyles";
import {
  BronzeImage,
  GoldImage,
  PrizeImage,
  SilverImage,
} from "../../utils/image";

export const HomePrizeAndRewardSection = () => {
  return (
    <HomePrizeAndRewardStyle className="py-5">
      <Container>
        <Row>
          <div className="col-6"></div>
          <div className="col-6 expandPrize">
            <TitleSectionStyle>
              <h3 className="pt-1">Prizes and</h3>
              <h3 className="pt-3">Rewards</h3>
            </TitleSectionStyle>
            <SubTitleSectionStyle className="pt-4">
              Hightlight of the prizes or rewards for winners and <br></br>
              for participants.
            </SubTitleSectionStyle>
          </div>
        </Row>
        <Row className="expandPrizeSection">
          <div className="col-5">
            <PrizeImageStyle src={PrizeImage} alt="prize_image" />
          </div>
          <div className="col">
            <Row>
              <div className="col p-0 m-0">
              <PrizeTwoStyle className="">
                <CardOneStyle className="text-center">
                  <PositionStyle>2nd</PositionStyle>
                  <RunnerStyle>Runner</RunnerStyle>
                  <PositionPrizeStyle>N300,000</PositionPrizeStyle>
                </CardOneStyle>
                <PositionImageStyle src={SilverImage} />
              </PrizeTwoStyle>
              </div>
              <div className="col p-0 m-0">
              <PrizeOneStyle className="">
                <GoldCardStyle className="text-center">
                  <PositionStyle>1st</PositionStyle>
                  <RunnerStyle>Runner</RunnerStyle>
                  <GoldPositionPrizeStyle>N400,000</GoldPositionPrizeStyle>
                </GoldCardStyle>
                <GoldPositionImageStyle src={GoldImage} alt="gold_image" className="goldImageOne"/>
              </PrizeOneStyle>
              </div>
              <div className="col p-0 m-0">
              <PrizeTwoStyle className="">
                <CardOneStyle className="text-center">
                  <PositionStyle>3rd</PositionStyle>
                  <RunnerStyle>Runner</RunnerStyle>
                  <PositionPrizeStyle>N150,000</PositionPrizeStyle>
                </CardOneStyle>
                <PositionImageStyle src={BronzeImage} />
              </PrizeTwoStyle>
              </div>
              
            
             
            </Row>
          </div>
        </Row>
      </Container>
    </HomePrizeAndRewardStyle>
  );
};

const HomePrizeAndRewardStyle = styled.div`
  /* background: url("https://s3-alpha-sig.figma.com/img/e4fd/0cef/d1777da401e1799ab23ea13eea056892?Expires=1696204800&Signature=XElBc6LwtaVEC1noTiD9SBz0oxCvMmX8vmbYKFMnJdYPf39FfrZWIq5OgYf~5EnX3BDW5iKZ0E0wSq54DQeZRc0BplQYVyOjSzH6ziubYprLZi7IDMj-sZ7MWd5MGnPhn-yyhy8Gmjn5nwu4cqNqGNXAUVr4T6Kzt80su7Z2LjTBSmfROGu029HyRMmyWybR8OHR8Cnhfns04t~mt9es5YeMA~VzvQPwv4vAe32~6FTmJWlZ2vpX87F1OERT88s6Nj69pSYKaLzPphIKYYFzKjynvkdkONU1RrrJcPywZtxhDWmi4IhHYlq7nH~eAVMjXnoYp8hshi8tmyKCiekD3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"),
    lightgray 0px -0.093px / 100% 109.967% no-repeat; */
  background-blend-mode: color-burn;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 1200px) {
    .expandPrize {
      width: 100%;
    }
    .expandPrizeSection > div:nth-child(1) {
      width: 100%;
    }
    .expandPrizeSection > div:nth-child(2) {
      width: 100%;
    }
   
  }
`;

const PrizeImageStyle = styled.img`
  width: 548px;
  height: 482px;
`;

const CardOneStyle = styled.div`
  width: 212px;
  height: 296px;
  border-radius: 8px;
  border: 1px solid #d434fe;
  background: rgba(212, 52, 254, 0.12);
  margin-top: 220px;
  padding-top: 70px;
  @media only screen and (max-width: 1200px) {
    transform: scale(0.6);
  }
`;

const GoldCardStyle = styled.div`
  width: 212px;
  height: 347px;
  border-radius: 8px;
  border: 1px solid #903aff;
  background: rgba(144, 58, 255, 0.12);
  margin-top: 180px;
  padding-top: 130px;
  transform: translate(0, 40px);
  @media only screen and (max-width: 900px) {
    transform: scale(0.6);
  }
`;

const PositionStyle = styled.div`
  font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 216.4%;
`;

const RunnerStyle = styled.div`
  font-family: 'Montserrat';
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 216.4%;
`;

const PositionPrizeStyle = styled.div`
  color: #d434fe;
  font-family: 'Montserrat';
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 216.4%;
`;

const GoldPositionPrizeStyle = styled.div`
  color: #903aff;
  font-family: Montserrat;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 216.4%; /* 69.248px */
`;

const PositionImageStyle = styled.img`
  width: 179px;
  height: 180px;
  position: relative;
  transform: translate(15px, -400px);
  @media only screen and (max-width: 1200px) {
    width: 8rem;
    height: 8rem;
    transform: translate(40px, -330px);
  }
`;

const PrizeOneStyle = styled.div`
  width: 212px;
`;
const GoldPositionImageStyle = styled.img`
  width: 296px;
  height: 296px;
  position: relative;
  transform: translate(-40px, -470px);
  @media only screen and (max-width: 1200px) {
    width: 10rem;
    height: 10rem;
    transform: translate(30px, -370px);
  }
`;

const PrizeTwoStyle = styled.div`
  position: relative;
  width: 212px;
`;
