import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      d="M12 22.002c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"
      fill="currentColor"
    />
    <path
      fill="currentColor"
      d="M16.949 15.002l-2.949-3 2.949-3L15 7.053l-3 2.949-3-3-1.949 2 2.949 3-2.949 3L9 16.951l3-2.949 3 2.949z"
    />
  </svg>
);

export default SvgComponent;
