import React from "react";
import { HomeHeroSection } from "../Components/HomePage/HomeHeroSection";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import { HomeIntroductionSection } from "../Components/HomePage/HomeIntroductconSection";
import { HomeRulesSection } from "../Components/HomePage/HomeRulesSection";
import { HomeJudgingCriteriaSection } from "../Components/HomePage/HomeJudgingCriteriaSection";
import { HomeFrequentlySection } from "../Components/HomePage/HomeFrequentlySection";
import { HomeTimelineSection } from "../Components/HomePage/HomeTimelineSection";
import { HomePrizeAndRewardSection } from "../Components/HomePage/HomePrizeAndRewardSection";
import { HomePartnerPageSection } from "../Components/HomePage/HomePartnerPageSection";
import { HomePrivacyPolicySection } from "../Components/HomePage/HomePrivacyPolicySection";
import { FooterSection } from "../Components/FooterSection";
import { NavBar } from "../Components/NavBar";

export const LandingPage = () => {
  return (
    <div>
      <NavBar/>
      <Row>
        <TopRowText className="mt-4">Igniting a Revolution in HR Innovation</TopRowText>
      </Row>
      <Row>
        <TopRowText>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="255"
            height="17"
            viewBox="0 0 255 17"
            fill="none"
          >
            <path
              d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
              stroke="#FF26B9"
              stroke-width="5"
            />
          </svg>
        </TopRowText>
      </Row>
      <HomeHeroSection />
      <HomeIntroductionSection />
      <hr />
      <HomeRulesSection />
      <hr />
      <HomeJudgingCriteriaSection />
      <hr />
      <HomeFrequentlySection />
      <hr />
      <HomeTimelineSection />
      <HomePrizeAndRewardSection />
      <HomePartnerPageSection />
      <HomePrivacyPolicySection />
      <FooterSection />
    </div>
  );
};
const TopRowText = styled.div`
  text-align: right;
  color: #fff;
  font-family: Montserrat;
  font-size: 36px;
  font-style: italic;
  font-weight: 700;
  line-height: normal;
  align-items: right;
  padding-right: 5%;
  hr {
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
`;
