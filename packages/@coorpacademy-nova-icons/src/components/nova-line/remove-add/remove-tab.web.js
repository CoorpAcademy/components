import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M22.707 11.294l-6-6A.997.997 0 0 0 16 5.001H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a.997.997 0 0 0 .707-.293l6-6a.999.999 0 0 0 0-1.414zm-7.121 5.707H3v-10h12.586l5 5-5 5z" />
      <path d="M11.707 10.708l-1.414-1.414L9 10.587 7.707 9.294l-1.414 1.414 1.293 1.293-1.293 1.293 1.414 1.414L9 13.415l1.293 1.293 1.414-1.414-1.293-1.293z" />
    </g>
  </svg>
);

export default SvgComponent;
