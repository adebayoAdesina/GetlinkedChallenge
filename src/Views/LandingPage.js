import React from "react";
import { HomeHeroSection } from "../Components/HomePage/HomeHeroSection";
import {Row } from "react-bootstrap";
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

export const LandingPage = () => {
  return (
    <div>
      <Row>
        <TopRowText>
          Igniting a Revolution in HR Innovation
        </TopRowText>
      </Row>
      <HomeHeroSection />
      <HomeIntroductionSection/>
      <hr/>
      <HomeRulesSection/>
      <hr/>
      <HomeJudgingCriteriaSection/>
      <hr/>
      <HomeFrequentlySection/>
      <hr/>
      <HomeTimelineSection/>
      <HomePrizeAndRewardSection/>
      <HomePartnerPageSection/>
      <HomePrivacyPolicySection/>
      <FooterSection/>
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
  hr {
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

`;
