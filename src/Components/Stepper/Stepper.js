import React from "react";
import { Row } from "react-bootstrap";
import "./style.css";
import styled from "styled-components";

export const Stepper = () => {
  return (
    <CenterStepperStyle>
      <div className="stepper d-flex flex-column mt-5">
        <div className="d-block mb-1">
          <Row>
            <div className="col">
              <StepperTitle varient={"right"}>
                Hackathon Announcement
              </StepperTitle>
              <StepperSubTitle varient={"right"}>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </StepperSubTitle>
            </div>
            <div className="col-2 d-flex flex-column align-items-center">
              <div className="rounded-circle py-2 px-3 bg-primary text-white mb-1">
                1
              </div>
              <div className="line h-100"></div>
            </div>
            <div className="col">
              <OnlyStepperTitle varient={"left"}>
                November 18, 2023
              </OnlyStepperTitle>
            </div>
          </Row>
          <Row>
            <div className="col">
              <OnlyStepperTitle varient={"right"}>
                November 18, 2023
              </OnlyStepperTitle>
            </div>
            <div class="col-2 d-flex flex-column align-items-center">
              <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">
                1
              </div>
              <div class="line h-100"></div>
            </div>
            <div className="col">
              <StepperTitle varient={"left"}>
                Hackathon Announcement
              </StepperTitle>
              <StepperSubTitle varient={"left"}>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </StepperSubTitle>
            </div>
          </Row>

          <Row>
            <div className="col">
              <StepperTitle varient={"right"}>
                Teams Registration ends
              </StepperTitle>
              <StepperSubTitle varient={"right"}>
                Interested Participants are no longer Allowed to register{" "}
              </StepperSubTitle>
            </div>
            <div class="col-2 d-flex flex-column align-items-center">
              <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">
                1
              </div>
              <div class="line h-100"></div>
            </div>
            <div className="col">
              <OnlyStepperTitle varient={"left"}>
                November 18, 2023
              </OnlyStepperTitle>
            </div>
          </Row>
          <Row>
            <div className="col">
              <OnlyStepperTitle varient={"right"}>
                November 18, 2023
              </OnlyStepperTitle>
            </div>
            <div class="col-2 d-flex flex-column align-items-center">
              <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">
                1
              </div>
              <div class="line h-100"></div>
            </div>
            <div className="col">
              <StepperTitle varient={"left"}>
                Announcement of the accepted teams and ideas
              </StepperTitle>
              <StepperSubTitle varient={"left"}>
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced{" "}
              </StepperSubTitle>
            </div>
          </Row>

          <Row>
            <div className="col">
              <StepperTitle varient={"right"}>
                Getlinked Hackathon 1.0 Offically Begins
              </StepperTitle>
              <StepperSubTitle varient={"right"}>
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions{" "}
              </StepperSubTitle>
            </div>
            <div class="col-2 d-flex flex-column align-items-center">
              <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">
                1
              </div>
              <div class="line h-100"></div>
            </div>
            <div className="col">
              <OnlyStepperTitle varient={"left"}>
                November 18, 2023
              </OnlyStepperTitle>
            </div>
          </Row>
          <Row>
            <div className="col">
              <OnlyStepperTitle varient={"right"}>
                November 18, 2023
              </OnlyStepperTitle>
            </div>
            <div class="col-2 d-flex flex-column align-items-center">
              <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">
                1
              </div>
              <div class="line h-100"></div>
            </div>
            <div className="col">
              <StepperTitle varient={"left"}>Demo Day </StepperTitle>
              <StepperSubTitle varient={"left"}>
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day{" "}
              </StepperSubTitle>
            </div>
          </Row>
        </div>
      </div>
    </CenterStepperStyle>
  );
};

const CenterStepperStyle = styled.section`
  align-items: center;
  align-content: center;
  align-self: center;
  background-color: #150E28;
`;

const StepperTitle = styled.div`
  color: #d434fe;
  text-align: ${(props) => (props.varient === "left" ? "left" : "right")};
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const StepperSubTitle = styled.div`
  text-align: ${(props) => (props.varient === "left" ? "left" : "right")};
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 170.9%;
`;

const OnlyStepperTitle = styled.div`
  color: #d434fe;
  font-family: Montserrat;
  text-align: ${(props) => (props.varient === "left" ? "left" : "right")};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
