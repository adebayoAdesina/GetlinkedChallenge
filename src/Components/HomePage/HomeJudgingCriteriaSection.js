import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import {
  TitleSectionStyle,
  SubTitleSectionStyle, FloatStarRight
} from "../../GlobalStyles/GlobalStyles";
import {
  ColoredStar,
  JudgingCriteriaImage,
  WhiteStar,
} from "../../utils/image";
import { JudgingListView } from "../JudgingListView";

export const HomeJudgingCriteriaSection = () => {
  const ListOfCriteria = [
    {
      title: "Innovation and Creativity: ",
      subTitle: ` Evaluate the uniqueness and creativity of the solution. Consider whether
      it addresses a real-world problem in a novel way or introduces
      innovative features.`,
    },
    {
      title: `Functionality: `,
      subTitle: `Assess how well the solution works. Does it perform its 
      intended functions effectively and without major issues? Judges would
      consider the completeness and robustness of the solution.`,
    },
    {
      title: "Impact and Relevance: ",
      subTitle: `Determine the potential impact of the solution 
      in the real world. Does it address a significant problem, and is it relevant 
      to the target audience? Judges would assess the potential social, 
      economic, or environmental benefits.`,
    },
    {
      title: "Technical Complexity: ",
      subTitle: ` Evaluate the technical sophistication of the solution. 
      Judges would consider the complexity of the code, the use of advanced 
      technologies or algorithms, and the scalability of the solution.`,
    },
    {
      title: "Adherence to Hackathon Rules: ",
      subTitle: `Judges will Ensure that the team adhered 
      to the rules and guidelines of the hackathon, including deadlines, use of 
      specific technologies or APIs, and any other competition-specific requirements.`,
    },
  ];
  return (
    <HomeJudgingCriteriaStyle>
      <Container>
        <Row>
          <LeftSectionStyle className="col-6">
            <div>
              <Row>
                <div>
                  <StarImage src={ColoredStar} alt="colored_star" />
                </div>
              </Row>
              <img
                src={JudgingCriteriaImage}
                alt="judging_image"
                id="judgingImage"
                className="col-12"
              />
            </div>
            <Row>
              <FloatStarRight>
                <StarImage src={WhiteStar} alt="colored_star" />
              </FloatStarRight>
            </Row>
          </LeftSectionStyle>
          <RightSectionStyle className="col-6">
            <TitleSectionStyle>
              <h3 className="pt-1">Judging Criteria</h3>
              <h3 className="pt-3">Key attributes</h3>
            </TitleSectionStyle>
            <SubTitleSectionStyle className="pt-4">
              {ListOfCriteria.length !== 0
                ? ListOfCriteria.map((e, i) => (
                    <JudgingListView props={e} key={i} />
                  ))
                : ""}
            </SubTitleSectionStyle>
            <ReadMoreButtonStyle className="mt-5">
              Read More
            </ReadMoreButtonStyle>
          </RightSectionStyle>
        </Row>
      </Container>
    </HomeJudgingCriteriaStyle>
  );
};

const HomeJudgingCriteriaStyle = styled.div`
  padding-top: 5%;
  padding-bottom: 7%;
`;
const LeftSectionStyle = styled.div``;
const StarImage = styled.img`
  height: 36px !important;
  width: 30px !important;
`;
const RightSectionStyle = styled.div`
  padding-left: 5%;
`;

const ReadMoreButtonStyle = styled.button`
  background: linear-gradient(
    270deg,
    #903aff 0%,
    #d434fe 56.42%,
    #ff26b9 99.99%,
    #fe34b9 100%
  );

  width: 172px;
  height: 53px;
`;

