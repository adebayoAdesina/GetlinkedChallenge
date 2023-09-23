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
  CardShadow,
  SuccessImageStyle,
  SuccessfullManStyle,
  CongratulationTextStyle,
  ShowSuccessImagesStyle,
  ShowSuccessStyle,
} from "../GlobalStyles/GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { CategoriesListAction } from "../Store/Actions/CategoriesListAction";
import axios from "axios";
import { registration_url } from "../API/api";
import { NavBar } from "../Components/NavBar";

export const RegistrationPage = () => {
  // const navigation = useNavigate();
  const [showShadow, setShowShadow] = useState(false);
  const [registrationForm, setRegistrationForm] = useState({
    email: "sample@eexample.com",
    phone_number: "0903322445533",
    team_name: "Space Explore",
    group_size: 10,
    project_topic: "Web server propagation",
    category: 1,
    privacy_poclicy_accepted: true,
  });
  const exitDetail = (e) => {
    // const element = e.target;
    // if (element.classList.contains("shadow")) {
    //   document.body.style.overflow = "auto";
    //   navigation("/");
    // }
    setShowShadow(true);
  };

  const backToHome = (e) => {
    setShowShadow(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CategoriesListAction());
  }, [dispatch]);

  const { categories } = useSelector((state) => state.isCategories);

  const url = registration_url();
  const registerNewUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(url, registrationForm, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      exitDetail();
      // Handle the response data here
    } catch (error) {
      console.error("Error:", error.response.data);
      // Handle errors here
    }
  };
  return (
    <>
      <NavBar />
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
                  <Row className="mt-3">
                    <div className="col-6">
                      <label className="my-2">Category</label>

                      <select className="selectTag w-100">
                        <option>Select your category</option>
                        {categories.length !== 0
                          ? categories.map((e, i) => (
                              <option key={i.id}>{e.name}</option>
                            ))
                          : ""}
                      </select>
                    </div>
                    <div className="col-6">
                      <label className="my-2">Group Size</label>
                      <select className="selectTag w-100">
                        <option>Select</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                    </div>
                  </Row>
                  <Row>
                    <PleaseReviewTextStyle className="mt-3 mb-2">
                      Please review your registration details before submitting
                    </PleaseReviewTextStyle>
                  </Row>
                  <Row>
                    <AgreeTextStyle className="mb-3">
                      <input
                        type="checkbox"
                        id="agree"
                        class="checkbox-input"
                      />
                      &nbsp; I agreed with the event terms and conditions and
                      privacy policy
                    </AgreeTextStyle>
                  </Row>
                  <Row>
                    <div className="text-center">
                      <ReadMoreButtonStyle
                        onClick={registerNewUser}
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
    </>
  );
};

const RegistrationPageStyle = styled.div`
  background: #150e28;
  height: 100vh;
  .registerOne {
    height: 47px;
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid #fff;
    padding: 0 8%;
    color: #d434fe;
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
  .selectTag {
    height: 47px;
    background-color: transparent;
    border-radius: 4px;
    color: white;
    border: 1px solid #fff;
    padding: 0 8%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    & > option {
      color: #150e28;
      background-color: #d434fe;
    }
    & > option:hover {
      color: #ffffff !important;
      background: #150e28 !important;
    }
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

const CongratulationsSubTextStyle = styled.div`
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
