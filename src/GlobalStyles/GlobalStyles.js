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
`;

const SubTitleSectionStyle = styled.div`
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.5px;
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
export {
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
};
