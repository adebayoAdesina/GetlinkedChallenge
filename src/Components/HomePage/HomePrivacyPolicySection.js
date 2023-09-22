import React from "react";
import styled from "styled-components";
import {
  SubTitleSectionStyle,
  TitleSectionStyle,
} from "../../GlobalStyles/GlobalStyles";
import { Container, Row } from "react-bootstrap";
import { LicensingPolicyListView } from "../LicensingPolicyListView";
import { LockImage } from "../../utils/image";

export const HomePrivacyPolicySection = () => {
  const LicensingData = [
    `The Standard License grants you a non-exclusive right to
        navigate and register for our event`,
    `You are licensed to use the item available at any free source
        sites, for your project developement`,
  ];
  return (
    <HomePrivacyPolicyStyle>
      <Container>
        <Row className="PolicySection">
          <div className="col-6 mt-5 pt-5 leftPolicySection">
            <TitleSectionStyle>
              <h3 className="pt-1">Privacy Policy and</h3>
              <h3 className="pt-3">Terms</h3>
            </TitleSectionStyle>
            <LastUpdatedStyle className="my-4 pt-3">
              Last updated on September 12, 2023
            </LastUpdatedStyle>
            <SubTitleSectionStyle>
              Below are our privacy & policy, which outline a lot of goodies.
              <br />
              it’s our aim to always take of our participant
            </SubTitleSectionStyle>

            <LicensingPolicySectionStyle className="p-5 my-5">
              <div>
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </div>
              <div className="mt-4">Licensing Policy</div>
              <div>Here are terms of our Standard License:</div>
              {LicensingData.length !== 0
                ? LicensingData.map((e, i) => (
                    <LicensingPolicyListView props={e} key={i} />
                  ))
                : ""}
              <Row>
                <div className="text-center">
                  <ReadMoreButtonStyle className="mt-5">
                    Read More
                  </ReadMoreButtonStyle>
                </div>
              </Row>
            </LicensingPolicySectionStyle>
          </div>
          <div className="col-6 rightPolicySection">
            <PrivacyRightSideStyle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="530"
                height="648"
                viewBox="0 0 530 648"
                fill="none"
              >
                <path
                  d="M530 294.545C530 458.018 416.933 610.887 265 648C113.067 610.887 0 458.018 0 294.545V117.818L265 0L530 117.818V294.545ZM265 589.091C375.417 559.636 471.111 428.269 471.111 301.025V156.109L265 64.2109L58.8889 156.109V301.025C58.8889 428.269 154.583 559.636 265 589.091ZM347.444 294.545V250.364C347.444 209.127 306.222 176.727 265 176.727C223.778 176.727 182.556 209.127 182.556 250.364V294.545C164.889 294.545 147.222 312.218 147.222 329.891V432.982C147.222 453.6 164.889 471.273 182.556 471.273H344.5C365.111 471.273 382.778 453.6 382.778 435.927V332.836C382.778 312.218 365.111 294.545 347.444 294.545ZM309.167 294.545H220.833V250.364C220.833 226.8 241.444 212.073 265 212.073C288.556 212.073 309.167 226.8 309.167 250.364V294.545Z"
                  fill="url(#paint0_linear_110_134)"
                  fill-opacity="0.14"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_110_134"
                    x1="265"
                    y1="0"
                    x2="265"
                    y2="648"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#903AFF" />
                    <stop offset="1" stop-color="#FF26B9" />
                  </linearGradient>
                </defs>
              </svg>
              <LockImageStyle src={LockImage} alt="lock_image" />
            </PrivacyRightSideStyle>
          </div>
        </Row>
      </Container>
    </HomePrivacyPolicyStyle>
  );
};

const HomePrivacyPolicyStyle = styled.div`
  margin-top: 10%;
  margin-bottom: 10%;
  @media only screen and (max-width: 1200px) {
    .PolicySection {
      display: inline-block !important;
      margin-bottom: 80%;
    }
    .leftPolicySection {
      width: 100% !important;
      padding-right: 15%;
    }
    .rightPolicySection {
      width: 100% !important;
      transform: scale(0.6);
    }
  }
`;
const LastUpdatedStyle = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.5px; /* 196.429% */
  @media only screen and (max-width: 1200px) {
    text-align: center;
  }
`;

const LicensingPolicySectionStyle = styled.div`
  border-radius: 5px;
  border: 1px solid #d434fe;
  background: rgba(217, 217, 217, 0.03);

  div:nth-child(1) {
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 216.4%; /* 30.296px */
  }
  div:nth-child(2) {
    color: #d434fe;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 216.4%; /* 34.624px */
  }
  div:nth-child(3) {
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 216.4%; /* 30.296px */
  }
  @media only screen and (max-width: 1200px) {
    text-align: center;
    width: 100% !important;
    margin-left: 6%;
  }
`;

const ReadMoreButtonStyle = styled.button`
  background: linear-gradient(
    270deg,
    #903aff 0%,
    #d434fe 56.42%,
    #ff26b9 99.99%,
    #fe34b9 100%
  );
  color: white;
  width: 172px;
  height: 53px;
`;

const PrivacyRightSideStyle = styled.div`
  display: block;
  text-align: center;
  position: relative;
  height: 20px;
`;
const LockImageStyle = styled.img`
  width: 60rem;
  position: absolute;

  transform: translate(-75%, 10%);
`;
