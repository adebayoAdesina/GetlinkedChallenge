import React, { useState } from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";

const FaqToggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div layout className="question" onClick={() => setToggle(!toggle)}>
      <Row>
        <div className="col">
          <ListTileTitle layoutId="">{title}</ListTileTitle>
        </div>
        <div className="col-1">
          <PlusTextStyle>+</PlusTextStyle>
        </div>
      </Row>
      {toggle ? children : ""}
      <FaqLine />
    </div>
  );
};
const ListTileTitle = styled.div`
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.5px; /*196.429% */
`;
const PlusTextStyle = styled.div`
  color: #d434fe;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.5px; /* 137.5% */
`;

const FaqLine = styled.hr`
  color: #d434fe;
  height: 1px;
`;

export default FaqToggle;
