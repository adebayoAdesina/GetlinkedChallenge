import React from "react";
import styled from "styled-components";

export const LicensingPolicyListView = ({ props }) => {
  return (
    <LicensingPolicyListViewStyle>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
          <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2" />
        </svg>
      </div>
      <div className="propsText mx-2    ">{props}</div>
    </LicensingPolicyListViewStyle>
  );
};

const LicensingPolicyListViewStyle = styled.div`
  display: flex;
  .propsText {
    color: #fff !important;
    font-family: Montserrat !important;
    font-size: 14px !important;
    font-style: normal !important;
    font-weight: 400 !important;
    line-height: 216.4% !important;
  }
`;
