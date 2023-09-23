import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import {
  ContactTopColoredText,
  ReadMoreButtonStyle,
  ContactBoxStyle,
} from "../GlobalStyles/GlobalStyles";
import useWindowDimensions from "../utils/GetWindowDimensions";
import { ShareIcons } from "../Components/ShareIcons";
import { NavBar } from "../Components/NavBar";

export const ContactPage = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <NavBar />
      <ContactPageStyle className="mt-5 pt-5">
        <Container>
          <Row className="p-o m-0 ">
            <div className="col-5 pt-5 p-0 m-0 contactLeft">
              <GetTouchStyle>Get in touch</GetTouchStyle>
              <GetTouchSubStyle>
                Contact <br />
                Information
              </GetTouchSubStyle>
              <GetTouchSubStyle>
                27,Alara Street <br />
                Yaba 100012 <br />
                Lagos State <br />
              </GetTouchSubStyle>
              <GetTouchSubStyle>Call Us : 07067981819</GetTouchSubStyle>
              <GetTouchSubStyle>
                we are open from Monday-Friday <br />
                08:00am - 05:00pm
              </GetTouchSubStyle>

              <Row>
                <ShareTextStyle className="mt-5 mb-4">Share on</ShareTextStyle>
                <ShareIcons />
              </Row>
            </div>
            <div className="col-7 contactRight">
              <ContactBoxStyle className="p-5">
                <div className="p-5">
                  <ContactTopColoredText>
                    Questions or need assistance?
                  </ContactTopColoredText>
                  <ContactTopColoredText className="mt-1">
                    Let us know about it!
                  </ContactTopColoredText>
                  {width < 1200 ? (
                    <ContactSubTitleStyle className="mt-3">
                      Email us below to any question related to our event
                    </ContactSubTitleStyle>
                  ) : (
                    ""
                  )}
                  <input
                    className="contactOne w-100 mt-5"
                    placeholder="First Name"
                  />
                  <input
                    className="contactOne w-100 mt-5"
                    placeholder="Mail"
                    type="email"
                  />
                  <textarea
                    type="text"
                    class="multiline-input w-100 mt-5"
                    placeholder="Message"
                  />
                  <Row>
                    <div className="text-center">
                      <ReadMoreButtonStyle className="mt-5">
                        Submit
                      </ReadMoreButtonStyle>
                    </div>
                  </Row>
                  {width < 1200 ? (
                    <div className="text-center pt-4">
                      <ShareTextStyle className="mt-5 mb-4">
                        Share on
                      </ShareTextStyle>
                      <ShareIcons />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </ContactBoxStyle>
            </div>
          </Row>
        </Container>
      </ContactPageStyle>
    </>
  );
};

const ContactPageStyle = styled.div`
  background: #150e28;
  height: 100vh;
  svg {
    margin-right: 3%;
  }
  .contactOne {
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid #fff;
    height: 47px;
    color: #ffffff;
    padding: 0 8%;
  }

  .multiline-input {
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid #fff;
    width: 437px;
    height: 119px;
    resize: vertical;
    color: #ffffff;
    padding: 2% 8%;
  }

  .contactOne::placeholder,
  .multiline-input::placeholder {
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media only screen and (max-width: 1200px) {
    .contactLeft {
      display: none;
    }
    .contactRight {
      width: 100%;
    }
  }
`;

const GetTouchStyle = styled.div`
  padding-left: 0;
  color: #d434fe;
  font-family: Clash Display;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const GetTouchSubStyle = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 2% 0;
`;

const ShareTextStyle = styled.div`
  color: #d434fe;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ContactSubTitleStyle = styled.div`
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
