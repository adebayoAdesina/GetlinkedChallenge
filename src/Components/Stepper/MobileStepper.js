import React from "react";
import {
  CenterStepperStyle,
  LineStyle,
  OnlyStepperTitle,
  StepperSubTitle,
  StepperTitle,
} from "../../GlobalStyles/GlobalStyles";
import { StarImageStyle } from "../../GlobalStyles/GlobalStyles";
import { WhiteStar } from "../../utils/image";
import { Row } from "react-bootstrap";

export const MobileStepper = () => {
  return (
    <CenterStepperStyle>
      <div className="stepper d-flex flex-column mt-5">
        <div className="d-block mb-1">
          <Row>
            <div className="col-2 d-flex flex-column align-items-center">
              <LineStyle className="h-100" />
            </div>
            <div className="col"></div>
          </Row>
          <Row>
            <div className="col-2 d-flex flex-column align-items-center">
              <LineStyle className="h-100" />
              <div className="rounded-circle py-2 px-3 bg-primary text-white mb-1">
                <strong>1</strong>
              </div>
            </div>
            <div className="col">
              <StepperTitle varient={"left"}>
                Hackathon Announcement
              </StepperTitle>
              <StepperSubTitle varient={"left"} className="mt-2 ">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </StepperSubTitle>
              <OnlyStepperTitle varient={"left"} className="mb-4">
                November 18, 2023
              </OnlyStepperTitle>

            </div>
          </Row>
          <Row>
            <div class="col-2 d-flex flex-column align-items-center">
              <LineStyle className="h-100" />
              <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">
                <strong>2</strong>
              </div>
            </div>
            <div className="col">
              <StepperTitle varient={"left"}>
                Hackathon Announcement
              </StepperTitle>
              <StepperSubTitle varient={"left"} className="mt-2">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </StepperSubTitle>
              <OnlyStepperTitle varient={"left"} className="mb-4">
                November 18, 2023
              </OnlyStepperTitle>
            </div>
          </Row>

          <Row>
            <div class="col-2 d-flex flex-column align-items-center">
              <LineStyle className="h-100" />
              <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">
                <strong>3</strong>
              </div>
            </div>
            <div className="col">
              <StepperTitle varient={"left"}>
                Teams Registration ends
              </StepperTitle>
              <StepperSubTitle varient={"left"} className="mt-2">
                Interested Participants are no longer Allowed to register{" "}
              </StepperSubTitle>
              <StarImageStyle
                src={WhiteStar}
                alt="colored_star"
                style={{
                  transform: "translate(0%,-80%)",
                  float: "right",
                }}
              />
              <OnlyStepperTitle varient={"left"} className="mb-4">
                November 18, 2023
              </OnlyStepperTitle>
            </div>
          </Row>
          <Row>
            <div class="col-2 d-flex flex-column align-items-center">
              <LineStyle className="h-100" />
              <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">
                <strong>4</strong>
              </div>
            </div>
            <div className="col">
              <StepperTitle varient={"left"}>
                Announcement of the accepted teams and ideas
              </StepperTitle>
              <StepperSubTitle varient={"left"} className="mt-2">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced{" "}
              </StepperSubTitle>
              <OnlyStepperTitle varient={"left"} className="mb-4">
                November 18, 2023
              </OnlyStepperTitle>
            </div>
          </Row>

          <Row>
            <div class="col-2 d-flex flex-column align-items-center">
              <LineStyle className="h-100" />
              <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">
                <strong>5</strong>
              </div>
            </div>
            <div className="col">
              <StepperTitle varient={"left"}>
                Getlinked Hackathon 1.0 Offically Begins
              </StepperTitle>
              <StepperSubTitle varient={"left"} className="mt-2">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions{" "}
              </StepperSubTitle>
              <OnlyStepperTitle varient={"left"} className="mb-4">
                November 18, 2023
              </OnlyStepperTitle>
            </div>
          </Row>
          <Row>
            <div class="col-2 d-flex flex-column align-items-center">
            <LineStyle className="h-100" />
              <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">
                <strong>6</strong>
              </div>
            </div>
            <div className="col">
              <StepperTitle varient={"left"}>Demo Day </StepperTitle>
              <StepperSubTitle varient={"left"} className="mt-2">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day{" "}
              </StepperSubTitle>
             
              <OnlyStepperTitle varient={"left"} className="mb-4">
                November 18, 2023
              </OnlyStepperTitle>
            </div>
          </Row>
        </div>
      </div>
    </CenterStepperStyle>
  );
};
