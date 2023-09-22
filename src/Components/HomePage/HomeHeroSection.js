import React from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import { StarImage, WhiteStar } from "../../utils/image";
import { Blur, StarImageStyle } from "../../GlobalStyles/GlobalStyles";

export const HomeHeroSection = () => {
  const ChainImageURL =
    "https://s3-alpha-sig.figma.com/img/1971/15ec/e07a2f6b05388994672be66411f81f42?Expires=1696204800&Signature=UuvuW64j93ZUVltNLOX~es8PMxtHlWwJWARnTkR6n31bFmCOyQew8t8lgHBjSavsM0zDiKwaG4FNQQjFHQCi6qB0f8G4uxL4pbBYRjJy7zMNg1oHfdzGEIhowzBJdvb6Old5YbHRxOgpOJ2h1GDbXF4v6h6yBSt665XOnIFWjets9HHD2n7BGe56N8yO~iu4Vqhk8mUgPEF-qJIDIaYgJGy4uF-QCQ~tYignyBmLJ5QHU6Kapn7A1dPA5s6wceHqXNLfuXAWAtMBLmrTZ1ZQCImqtXmEHJPNfudjvfUdMp1V6xSHeIrqReXNXAY4YU8mp80T49oP3l1FK5joGlFY6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  const BoomImageURL =
    "https://s3-alpha-sig.figma.com/img/ad71/a4dd/666167cffb0c9bf39fca6a2d11c90feb?Expires=1696204800&Signature=B06x0hH~eDZfVMO3f6l5vh~b-4Cmm3ieK3dsajMfQOAhzPCDV0Aqb3sBSsJrQlzRhYkxv7CWT2gK9fDy0trv2y1kBcaVESQZizi5YqdvkbfwklcEF1ZI6uAbzLG6R6imDmdBefBWRJNDzCWKK1dDDxJZzRLyG3zgGuP9egPcdMm79Wxq2mxVAyH-mFZxk0eQlVmQcI9uZOUqnAVpuvJR2JbPtc3ET3bRR14uctMXv6SQKJo3k9yFO1G8LZUokRiYUSJDVYFgK~324CNaFfMP~w5zhNvhDce60bFiCnn-5wExmoNDlUofNuNJaRBLZEK~E5AZSoTjFXDs9tLlpk3xbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

  const HeroImageURL =
    "https://s3-alpha-sig.figma.com/img/2cea/d700/cfbd4eb06b68c33fac2a89295904df2c?Expires=1696204800&Signature=Pl8bxQP7ZWA8IQ~PcHxowSaaCsU8KsCWsjtAdV6WbycHB9CRSS3HmiUrIoLq7x8FSDNA5qhlVqpaF9PjBCB7vHkotMawDRLRihUUfrQSiMjhzG1sXACFmEqCbgbAOnmThDsh05K5hvMNlu0aZjKfhaWi3WigTfEpzQu79zcsA-xggSvAG3k5-pvQEoXQiViO6zISNYUBUgSoT6iO4SJ7jwGKZOA1tL3MGCzbwMyaTEqn8yLde~kSrWX34kogEmUFU9ziDrla9dgaxjRFUFtuDiw2J5NKDjGqV5QjoAQwb~SsNsFDcCq3Jq76s-4WdTGa2vBih1ibhsrAHsdeW0m6xg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

  return (
    <HomeHeroSectionStyled>
      <LeftHeroSection className="">
        <StarImageStyle
          src={WhiteStar}
          alt="colored_star"
          style={{
            transform: "translate(250%, 300%)",
          }}
        />
        <Blur />
        <div>
          <GetLinkedStyled>getlinked Tech</GetLinkedStyled>
          <Row>
            <HackathonStyled>
              Hackathon{" "}
              <div>
                &nbsp; 1.0 <img src={ChainImageURL} alt="chain" />
                <img src={BoomImageURL} alt="boom" />
              </div>
            </HackathonStyled>
          </Row>
          <Row className="pt-3">
            <ParticipationStyle>
              Participate in getlinked tech Hackathon 2023 stand
              <br />a chance to win a Big prize
            </ParticipationStyle>
          </Row>
          <Row className="pt-5">
            <RegisterButtonStyle>Register</RegisterButtonStyle>
          </Row>
          <StarImageStyle
            src={WhiteStar}
            alt="colored_star"
            style={{
              transform: "translate(1500%, -150%)",
              opacity: "0.6",
            }}
          />
          <Row>
            <HeroTimeSectionStyle>
              <h3>00</h3>
              <h6>h</h6>
              <h3>00</h3>
              <h6>m</h6>
              <h3>00</h3>
              <h6>s</h6>
            </HeroTimeSectionStyle>
          </Row>
        </div>
      </LeftHeroSection>
      <RightSectionStyled className="">
        <Blur
          style={{
            transform: "translate(85%, 80%)",
            width: "40%",
            height: "240px",
          }}
        />
        <div>
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
        </div>
      </RightSectionStyled>
    </HomeHeroSectionStyled>
  );
};

const HomeHeroSectionStyled = styled.div`
  display: flex;
  position: relative !important;
  padding-top: 3%;
`;
const LeftHeroSection = styled.div`
  padding-left: 8%;
  padding-top: 6%;
  position: relative;
  z-index: 1;
  transform: translateY(-20%);
  /* padding-bottom: calc(5%); */
  padding-bottom: calc(4vh - 10%);
  div {
    position: relative;
  }
`;
const GetLinkedStyled = styled.div`
  font-family: Clash Display;
  font-size: 80px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
`;
const HackathonStyled = styled.div`
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
`;

const ParticipationStyle = styled.div`
  color: #fff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 166%; /* 33.2px */
`;
const RegisterButtonStyle = styled.button`
  width: 172px;
  height: 53px;
  flex-shrink: 0;
  border-radius: 4px;
  background: linear-gradient(
    270deg,
    #903aff 0%,
    #d434fe 56.42%,
    #ff26b9 99.99%,
    #fe34b9 100%
  );
`;

const RightSectionStyled = styled.div`
  position: absolute !important;
  transform: translate(65%, -8%);
  width: 60%;
  div {
    display: flex;
    position: relative;
    transform: translateY(-22%);
    #personImage {
      float: right;
      flex-shrink: 0;
      width: 90%;
      background-blend-mode: luminosity;
    }
    #starImage {
      width: 80%;
      position: absolute;
      background-blend-mode: hard-light;
      transform: translate(10%, 0);
      opacity: 8;
    }
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
`;
