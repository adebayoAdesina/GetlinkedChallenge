import React from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";

export const JudgingListView = ({ props }) => {
  const { title, subTitle } = props;
  return (
    <Row>
      <JudgingListViewStyled className="my-2">
        <b>{title}</b>
        {subTitle}
      </JudgingListViewStyled>
    </Row>
  );
};

const JudgingListViewStyled = styled.div`
  b {
    color: #ff26b9;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 173.5%; /* 27.76px */
  }
  color: #fff;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 173.5%;
`;
