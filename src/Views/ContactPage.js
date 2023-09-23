import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import {
  ContactTopColoredText,
  ReadMoreButtonStyle,
  ContactBoxStyle,
  SuccessImageStyle,
  SuccessfullManStyle,
  CardShadow,
  CongratulationTextStyle,
  ShowSuccessImagesStyle,
  ShowSuccessStyle,
  CenterSpinner,
  Blur,
} from "../GlobalStyles/GlobalStyles";
import useWindowDimensions from "../utils/GetWindowDimensions";
import { ShareIcons } from "../Components/ShareIcons";
import { NavBar } from "../Components/NavBar";
import { useFormik } from "formik";
import { ContactSchemas } from "../Schemas/ContactSchema";
import axios from "axios";
import { contact_url } from "../API/api";
import { DotLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { SuccessImage, SuccessfullMan } from "../utils/image";

export const ContactPage = () => {
  const { width } = useWindowDimensions();
  const initialValues = {
    email: "",
    first_name: "",
    message: "",
  };

  const [isLoading, setisLoading] = useState(0);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ContactSchemas,
    validateOnChange: false,
    onSubmit: (values) => {
      sendMessage(values);
    },
  });

  const sendMessage = async (data) => {
    setisLoading(1);
    await axios({
      method: "post",
      url: contact_url(),
      data: data,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log(response);
        setisLoading(2);
      })
      .catch((error) => {
        console.log(error);
        setisLoading(0);
      });
  };
  return (
    <>
      {width > 1200 ? (
        <NavBar />
      ) : (
        <Container className="p-5">
          <Link to={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <circle
                cx="11.5"
                cy="11.5"
                r="11"
                stroke="url(#paint0_linear_177_298)"
              />
              <path
                d="M12.2666 9.20001L9.19995 12.2667L12.2666 14.5667"
                stroke="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_177_298"
                  x1="11.5"
                  y1="0"
                  x2="11.5"
                  y2="23"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#903AFF" />
                  <stop offset="1" stop-color="#FF26B9" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
        </Container>
      )}
      <ContactPageStyle className="pt-sm-0 mt-5 pt-5">
        <Container>
          <Row className="p-o m-0 ">
            <div className="col-5  pt-5 p-0 m-0 contactLeft">
              <GetTouchStyle>Get in touch</GetTouchStyle>
              <Blur
                    style={{
                      transform: "translate(-35rem, 0rem)",
                    }}
                  />
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
                  <form onSubmit={formik.handleSubmit}>
                    <input
                      className="contactOne w-100 mt-5"
                      placeholder="First Name"
                      onChange={formik.handleChange}
                      name="first_name"
                    />

                    {formik.errors.first_name && (
                      <span className="text-danger">
                        {formik.errors.first_name.message}
                      </span>
                    )}
                    <input
                      className="contactOne w-100 mt-5"
                      placeholder="Mail"
                      type="email"
                      name="email"
                      onChange={formik.handleChange}
                    />
                    {formik.errors.email && (
                      <span className="text-danger">
                        {formik.errors.email.message}
                      </span>
                    )}
                    <textarea
                      type="text"
                      class="multiline-input w-100 mt-5"
                      placeholder="Message"
                      name="message"
                      onChange={formik.handleChange}
                    />
                    {formik.errors.message && (
                      <span className="text-danger">
                        {formik.errors.message.message}
                      </span>
                    )}
                    <Row>
                      <div className="text-center">
                        <ReadMoreButtonStyle className="mt-5" type="submit">
                          Submit
                        </ReadMoreButtonStyle>
                      </div>
                    </Row>
                  </form>
                  <Blur
                    style={{
                      transform: "translate(20rem, -5rem)",
                    }}
                  />
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
        {isLoading === 1 ? (
          <CardShadow>
            <CenterSpinner>
              <DotLoader color="#d434fe" />
            </CenterSpinner>
          </CardShadow>
        ) : (
          ""
        )}

        {isLoading === 2 ? (
          <CardShadow>
            <Row>
              <div className="col col-md-4"></div>
              <ShowSuccessStyle className="col col-md-4 p-5">
                <Row>
                  <ShowSuccessImagesStyle>
                    <SuccessImageStyle src={SuccessImage} alt="success_image" />
                    <SuccessfullManStyle
                      src={SuccessfullMan}
                      alt="successful_man"
                    />
                  </ShowSuccessImagesStyle>
                </Row>
                <Row>
                  <CongratulationTextStyle>
                    Message Sent
                  </CongratulationTextStyle>
                </Row>

                <Row>
                  <div className="text-center">
                    <Link to={"/"}>
                      <ReadMoreButtonStyle className="mt-2 w-100">
                        Back
                      </ReadMoreButtonStyle>{" "}
                    </Link>
                  </div>
                </Row>
              </ShowSuccessStyle>
              <div className="col"></div>
            </Row>
          </CardShadow>
        ) : (
          ""
        )}
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
      position: absolute;
      width: 100%;

      transform: translateY(-14%) !important;
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
