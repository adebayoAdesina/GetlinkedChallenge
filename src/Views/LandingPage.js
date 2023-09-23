import React from "react";
import { HomeHeroSection } from "../Components/HomePage/HomeHeroSection";
import { Container, Row } from "react-bootstrap";
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
import { motion } from "framer-motion";
import { PageAnimation } from "../GlobalStyles/Animation";
import { LandingHeroLine } from "../utils/LandingHeroLine";

export const LandingPage = () => {
  return (
    <motion.div
      exit="exit"
      variants={PageAnimation}
      initial="hidden"
      animate="show"
    >
      <NavBar />
      <Container>
        <Row>
          <TopRowText varient="center" className="mt-4">
            Igniting a Revolution in HR Innovation{" "}
            <div>
              <LandingHeroLine/>
            </div>
          </TopRowText>
        </Row>
      </Container>
      <HomeHeroSection />
      <hr />
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
    </motion.div>
  );
};
const TopRowText = styled.div`
  text-align: right;
  color: #fff;
  font-family: "Montserrat";
  font-size: 36px;
  font-style: italic;
  font-weight: 700;
  line-height: normal;
  align-items: right;
  padding-right: 0%;
  hr {
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  @media only screen and (max-width: 1200px) {
    align-items: center;
    text-align: ${(props) => props.varient};
    font-size: 1rem;
    svg {
      width: 6rem;
      transform: translateX(100%);
    }
  }
`;
