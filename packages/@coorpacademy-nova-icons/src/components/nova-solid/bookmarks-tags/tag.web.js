import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M21.707 13.293l-11-11A.997.997 0 0 0 10 2H3a1 1 0 0 0-1 1v7c0 .266.105.519.293.707l11 11a.997.997 0 0 0 1.414 0l7-7a.999.999 0 0 0 0-1.414zM7 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 7 9z"
    />
  </svg>
);

export default SvgComponent;
