import React from "react";
import { Row } from "react-bootstrap";
import "./style.css";
import { ColoredStar, WhiteStar } from "../../utils/image";
import { CenterStepperStyle, LineStyle, OnlyStepperTitle, StarImageStyle, StepperSubTitle, StepperTitle } from "../../GlobalStyles/GlobalStyles";

export const Stepper = () => {
  return (
    <CenterStepperStyle>
      <div className="stepper d-flex flex-column mt-5">
        <div className="d-block mb-1">
          <Row>
            <div className="col py-5">
              <StarImageStyle
                src={ColoredStar}
                alt="colored_star"
                style={{
                  transform: "translate(0%,-80%)",
                }}
              />
            </div>
            <div className="col-2 d-flex flex-column align-items-center">
              <LineStyle className="h-100" />
            </div>
            <div className="col"></div>
          </Row>
          <Row>
            <div className="col">
              <StepperTitle varient={"right"}>
                Hackathon Announcement
              </StepperTitle>
              <StepperSubTitle varient={"right"} className="mt-2 mb-5">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </StepperSubTitle>
            </div>
            <div className="col-2 d-flex flex-column align-items-center">
              <div className="rounded-circle py-2 px-3 bg-primary text-white mb-1">
                <strong>1</strong>
              </div>
              <LineStyle className="h-100" />
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
                <strong>2</strong>
              </div>
              <LineStyle className="h-100" />
            </div>
            <div className="col">
              <StepperTitle varient={"left"}>
                Hackathon Announcement
              </StepperTitle>
              <StepperSubTitle varient={"left"} className="mt-2 mb-5">
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
              <StepperSubTitle varient={"right"} className="mt-2 mb-5">
                Interested Participants are no longer Allowed to register{" "}
              </StepperSubTitle>
            </div>
            <div class="col-2 d-flex flex-column align-items-center">
              <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">
                <strong>3</strong>
              </div>
              <LineStyle className="h-100" />
            </div>
            <div className="col">
              <StarImageStyle
                src={WhiteStar}
                alt="colored_star"
                style={{
                  transform: "translate(0%,-80%)",
                  float: "right",
                }}
              />
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
                <strong>4</strong>
              </div>
              <LineStyle className="h-100" />
            </div>
            <div className="col">
              <StepperTitle varient={"left"}>
                Announcement of the accepted teams and ideas
              </StepperTitle>
              <StepperSubTitle varient={"left"} className="mt-2 mb-5">
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
              <StepperSubTitle varient={"right"} className="mt-2 mb-5">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions{" "}
              </StepperSubTitle>
            </div>
            <div class="col-2 d-flex flex-column align-items-center">
              <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">
                <strong>5</strong>
              </div>
              <LineStyle className="h-100" />
            </div>
            <div className="col">
            
              <OnlyStepperTitle varient={"left"}>
                November 18, 2023
              </OnlyStepperTitle>
            </div>
          </Row>
          <Row>
            <div className="col">
            <StarImageStyle
                src={WhiteStar}
                alt="colored_star"
                style={{
                  transform: "translate(0%,-80%)",
                  opacity: '0.4'
                }}
              />
              <OnlyStepperTitle varient={"right"}>
                November 18, 2023
              </OnlyStepperTitle>
            </div>
            <div class="col-2 d-flex flex-column align-items-center">
              <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">
                <strong>6</strong>
              </div>
              <div class="line h-100"></div>
            </div>
            <div className="col">
              <StepperTitle varient={"left"}>Demo Day </StepperTitle>
              <StepperSubTitle varient={"left"} className="mt-2 mb-5">
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


