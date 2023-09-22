import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import {
  FemaleWalking,
  MaleWalking,
  RegisterPageImage,
  SuccessImage,
  SuccessfullMan,
} from "../utils/image";
import {
  ContactTopColoredText,
  ReadMoreButtonStyle,
  ContactBoxStyle,
} from "../GlobalStyles/GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { CategoriesListAction } from "../Store/Actions/CategoriesListAction";

export const RegistrationPage = () => {
  // const navigation = useNavigate();
  const [showShadow, setShowShadow] = useState(false);
  const exitDetail = (e) => {
    // const element = e.target;
    // if (element.classList.contains("shadow")) {
    //   document.body.style.overflow = "auto";
    //   navigation("/");
    // }
    setShowShadow(true);
  };

  const backToHome = (e) => {
    setShowShadow(false)
  } 

  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CategoriesListAction());
  }, [dispatch]);

  const { categories} = useSelector(
    (state) => state.categories
  );

  return (
    <RegistrationPageStyle className="mt-5 pt-5">
  
      <Container>
        <Row>
          <div className="col-6">
            <RegistrationPageImageStyle
              src={RegisterPageImage}
              alt="registration_image"
            />
          </div>
          <div className="col-6 ">
            <ContactBoxStyle className="p-5">
              <div className="p-5">
                <ContactTopColoredText>Register</ContactTopColoredText>
                <PartTextStyle className="mt-5 mb-3">
                  Be part of this movement! &nbsp;&nbsp;&nbsp;
                  <div className="workingSection">
                    <div>
                      <img src={FemaleWalking} alt="female_walking" />
                      <img src={MaleWalking} alt="male_walking" />
                    </div>
                    <div></div>
                  </div>
                </PartTextStyle>
                <CreateAccountTextStyle>
                  CREATE YOUR ACCOUNT
                </CreateAccountTextStyle>
                <Row className="mt-3">
                  <div className="col-6">
                    <label className="my-2">Team’s Name</label>
                    <input
                      className="registerOne w-100"
                      placeholder="Enter the name of your group"
                    />
                  </div>
                  <div className="col-6">
                    <label className="my-2">Phone</label>
                    <input
                      className="registerOne w-100"
                      placeholder="Enter your phone number"
                      type="tel"
                    />
                  </div>
                </Row>
                <Row className="mt-3">
                  <div className="col-6">
                    <label className="my-2">Email</label>
                    <input
                      className="registerOne w-100"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="col-6">
                    <label className="my-2">Project Topic</label>
                    <input
                      className="registerOne w-100"
                      placeholder="What is your group project topic"
                      type="tel"
                    />
                  </div>
                </Row>
                <Row>
                  <PleaseReviewTextStyle className="mt-3 mb-2">
                    Please review your registration details before submitting
                  </PleaseReviewTextStyle>
                </Row>
                <Row>
                  <AgreeTextStyle className="mb-3">
                    <input type="checkbox" id="agree" class="checkbox-input" />
                    &nbsp; I agreed with the event terms and conditions and
                    privacy policy
                  </AgreeTextStyle>
                </Row>
                <Row>
                  <div className="text-center">
                    <ReadMoreButtonStyle
                      onClick={exitDetail}
                      className="mt-2 w-100"
                    >
                      Register Now
                    </ReadMoreButtonStyle>
                  </div>
                </Row>
              </div>
            </ContactBoxStyle>
          </div>
        </Row>
      </Container>
      {showShadow === true ? (
        <CardShadow className="shadow">
          <Row>
            <div className="col"></div>
            <ShowSuccessStyle className="col-4 p-5">
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
                  Congratulations <br />
                  you have successfully Registered!
                </CongratulationTextStyle>
              </Row>
              <Row>
                <CongratulationsSubTextStyle className="mt-3 mb-5">
                  Yes, it was easy and you did it! <br />
                  check your mail box for next step
                </CongratulationsSubTextStyle>
              </Row>
              <Row>
                  <div className="text-center">
                    <ReadMoreButtonStyle
                      onClick={backToHome}
                      className="mt-2 w-100"
                    >
                      Back
                    </ReadMoreButtonStyle>
                  </div>
                </Row>
            </ShowSuccessStyle>
            <div className="col"></div>
          </Row>
        </CardShadow>
      ) : (
        ""
      )}
    </RegistrationPageStyle>
  );
};

const CardShadow = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    /* background-color: #ff7676; */
  }
  &::-webkit-scrollbar-track {
    background-color: #150E28;
  }
`;

const ShowSuccessStyle = styled.div`
  border-radius: 5px;
  border: 1px solid #d434fe;
  background: rgba(255, 255, 255, 0.01);
  margin-top: 10vh;
`;

const ShowSuccessImagesStyle = styled.div`
  display: block;
  text-align: center;
  position: relative;
`;
const SuccessfullManStyle = styled.img`
  width: 305px;
  height: 305px;
  /* position: relative; */
  transform: translateX(15%);
`;

const SuccessImageStyle = styled.img`
  position: absolute;
  width: 288px;
  height: 288px;
  transform: translateX(-15%);
`;
const RegistrationPageStyle = styled.div`
  background: #150e28;
  height: 100vh;
  .registerOne {
    height: 47px;
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid #fff;
    padding: 0 8%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  .registerOne::placeholder {
    color: rgba(255, 255, 255, 0.25);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const RegistrationPageImageStyle = styled.img`
  width: 110%;
`;

const PartTextStyle = styled.div`
  color: #fff;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  .workingSection {
    transform: translate(0, -50%);
    display: block;
    align-items: center;
    text-align: center;
    div:nth-child(1) {
      img {
        width: 30px;
        height: 30px;
        flex-shrink: 0;
        transform: scaleX(-1);
      }
    }
    div:nth-child(2) {
      background: #d434fe;
      width: 101px;
      height: 1px;
    }
  }
`;

const CreateAccountTextStyle = styled.div`
  color: #fff;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const PleaseReviewTextStyle = styled.div`
  color: #ff26b9;
  font-family: Montserrat;
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
`;

const AgreeTextStyle = styled.div`
  color: #fff;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  .checkbox-input {
  appearance: none;
  -webkit-appearance: none; 
  width: 20px; 
  height: 20px; 
  border: 2px solid #333; 
  border-radius: 4px; 
  margin-right: 10px;
  cursor: pointer; 
}

.checkbox-input:checked + .checkbox-input::before {
    content: "\2713";
  background-color: #ff26b9 !important; 
  border-color: #fff; 
}
`;

const CongratulationTextStyle = styled.div`
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const CongratulationsSubTextStyle = styled.div`
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
