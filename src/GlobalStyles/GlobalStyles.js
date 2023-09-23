import styled from "styled-components";

const TitleSectionStyle = styled.div`
  h3:nth-child(1) {
    color: #fff;
    font-family: Clash Display;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 0%; /* 0px */
    padding-bottom: 10px;
  }
  h3:nth-child(2) {
    color: #d434fe;
    font-family: Clash Display;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 0%;
  }
  @media only screen and (max-width: 1200px) {
    text-align: center;
    font-size: 3rem;
  }
`;

const SubTitleSectionStyle = styled.div`
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.5px;
  @media only screen and (max-width: 1200px) {
    text-align: center;
    font-size: 1rem;
  }
`;

const FloatStarRight = styled.div`
  float: right;
  text-align: right;
`;

const FollowTextStyle = styled.div`
  color: #d434fe;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0;
  svg {
    margin-left: 2%;
  }
`;

const ContactBoxStyle = styled.div`
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media only screen and (max-width: 1200px) {
    border: none;
    background: transparent;
  }
`;

const ContactTopColoredText = styled.div`
  color: #d434fe;
  font-family: Clash Display;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ReadMoreButtonStyle = styled.button`
  background: linear-gradient(
    270deg,
    #903aff 0%,
    #d434fe 56.42%,
    #ff26b9 99.99%,
    #fe34b9 100%
  );
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #d434fe;
  color: white;
  width: 172px;
  height: 53px;
`;

const Blur = styled.div`
  z-index: 0 !important;
  width: 40%;
  height: 240px;
  filter: blur(170px);
  background-color: #903aff;

  background-blend-mode: hard-light;
  position: absolute;
  transform: translate(50%, -100px);
`;

const ColoredStarStyle = styled.img`
  width: 21px;
  height: 25px;
`;

const StarImageStyle = styled.img`
  height: 36px !important;
  width: 30px !important;
`;

const CenterStepperStyle = styled.section`
  align-items: center;
  align-content: center;
  align-self: center;
  background-color: #150e28;
  .bg-primary {
    border-radius: 26.5px;
    background: linear-gradient(270deg, #903aff 0%, #d434fe 100%) !important;
  }
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

const LineStyle = styled.div`
  width: 2px;
  background-color: #d434fe !important;
`;

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
    background-color: #150e28;
  }
`;

const SuccessImageStyle = styled.img`
  position: absolute;
  width: 288px;
  height: 288px;
  transform: translateX(-15%);
`;

const SuccessfullManStyle = styled.img`
  width: 305px;
  height: 305px;
  /* position: relative; */
  transform: translateX(15%);
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


export {
  ShowSuccessImagesStyle,
  ShowSuccessStyle,
  TitleSectionStyle,
  SubTitleSectionStyle,
  FloatStarRight,
  FollowTextStyle,
  ContactTopColoredText,
  ContactBoxStyle,
  ReadMoreButtonStyle,
  Blur,
  ColoredStarStyle,
  StarImageStyle,
  OnlyStepperTitle,
  LineStyle,
  StepperSubTitle,
  StepperTitle,
  CenterStepperStyle,
  CardShadow,
  SuccessImageStyle,
  SuccessfullManStyle,
  CongratulationTextStyle,
};
