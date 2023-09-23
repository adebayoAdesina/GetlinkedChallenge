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
import { useFormik } from "formik";
import { RegistrationSchemas } from "../Schemas/RegistrationSchema";

export const RegistrationPage = () => {
  const [showShadow, setShowShadow] = useState(false);

  const exitDetail = (e) => {
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

  const registerNewUser = async (value, e) => {
    const sendingData = {
      email: value.email,
      phone_number: value.phone_number,
      team_name: value.team_name,
      group_size: Number(value.group_size),
      project_topic: value.project_topic,
      category: Number(value.category),
      privacy_poclicy_accepted: value.privacy_poclicy_accepted,
    };

    await axios({
      method: "post",
      url: registration_url(),
      data: sendingData,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log(response);
        exitDetail();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const initialValues = {
    email: "",
    phone_number: "",
    team_name: "",
    group_size: null,
    project_topic: "",
    category: null,
    privacy_poclicy_accepted: false,
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: RegistrationSchemas,
    validateOnChange: false,
    onSubmit: (value) => {
      registerNewUser(value);
    },
  });

  return (
    <>
      <NavBar />
      <RegistrationPageStyle className="mt-5 pt-5">
        <Container>
          <Row>
            <div className="registrationLeft col-12 col-md-6">
              <RegistrationPageImageStyle
                src={RegisterPageImage}
                alt="registration_image"
              />
            </div>
            <div className="col-12 col-md-6 ">
              <ContactBoxStyle className="p-5">
                <div>
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
                  <form onSubmit={formik.handleSubmit}>
                    <Row className="mt-3">
                      <div className="col-6">
                        <label className="my-2">Team’s Name</label>
                        <input
                          className="registerOne w-100"
                          placeholder="Enter the name of your group"
                          name="team_name"
                          onChange={formik.handleChange}
                        />
                        {formik.errors.team_name && (
                          <span className="text-danger">
                            {formik.errors.team_name.message}
                          </span>
                        )}
                      </div>
                      <div className="col-6">
                        <label className="my-2">Phone</label>
                        <input
                          className="registerOne w-100"
                          placeholder="Enter your phone number"
                          name="phone_number"
                          onChange={formik.handleChange}
                        />
                        {formik.errors.phone_number && (
                          <span className="text-danger">
                            {formik.errors.phone_number}
                          </span>
                        )}
                      </div>
                    </Row>
                    <Row className="mt-3">
                      <div className="col-6">
                        <label className="my-2">Email</label>
                        <input
                          className="registerOne w-100"
                          placeholder="Enter your email address"
                          name="email"
                          onChange={formik.handleChange}
                        />
                        {formik.errors.email && (
                          <span className="text-danger">
                            {formik.errors.email.message}
                          </span>
                        )}
                      </div>
                      <div className="col-6">
                        <label className="my-2">Project Topic</label>
                        <input
                          className="registerOne w-100"
                          placeholder="What is your group project topic"
                          name="project_topic"
                          onChange={formik.handleChange}
                        />
                        {formik.errors.project_topic && (
                          <span className="text-danger">
                            {formik.errors.project_topic.message}
                          </span>
                        )}
                      </div>
                    </Row>
                    <Row className="mt-3">
                      <div className="col-6">
                        <label className="my-2">Category</label>
                        <select
                          className="selectTag w-100"
                          name="category"
                          onChange={formik.handleChange}
                          type="number"
                          as="select"
                        >
                          <option value="Select your category">
                            Select your category
                          </option>
                          {categories.length !== 0
                            ? categories.map((e, i) => (
                                <option value={i + 1} key={i.id}>
                                  {e.name}
                                </option>
                              ))
                            : ""}
                        </select>
                        {formik.errors.category && (
                          <span className="text-danger">
                            {formik.errors.category}
                          </span>
                        )}
                      </div>
                      <div className="col-6">
                        <label className="my-2">Group Size</label>
                        <select
                          className="selectTag w-100"
                          name="group_size"
                          onChange={formik.handleChange}
                          type="number"
                          as="select"
                        >
                          <option value="Select">Select</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                        </select>
                        {formik.errors.group_size && (
                          <span className="text-danger">
                            {formik.errors.group_size}
                          </span>
                        )}
                      </div>
                    </Row>
                    <Row>
                      <PleaseReviewTextStyle className="mt-3 mb-2">
                        Please review your registration details before
                        submitting
                      </PleaseReviewTextStyle>
                    </Row>
                    <Row>
                      <AgreeTextStyle className="mb-3">
                        <input
                          type="checkbox"
                          id="agree"
                          class="checkbox-input"
                          name="privacy_poclicy_accepted"
                          onChange={formik.handleChange}
                        />
                        &nbsp; I agreed with the event terms and conditions and
                        privacy policy
                        <Row>
                          {formik.errors.privacy_poclicy_accepted && (
                            <span className="text-danger">
                              {formik.errors.privacy_poclicy_accepted}
                            </span>
                          )}
                        </Row>
                      </AgreeTextStyle>
                    </Row>
                    <Row>
                      <div className="text-center">
                        <ReadMoreButtonStyle
                          type="submit"
                          className="mt-2 w-100"
                        >
                          Register Now
                        </ReadMoreButtonStyle>
                      </div>
                    </Row>
                  </form>
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
    @media only screen and (max-width: 1200px) {
      .registrations {
        display: block !important;
        width: 100% !important;
      }
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
