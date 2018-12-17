import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 11.001h-2v-2H8v2H6v2h2v2h2v-2h2z" />
      <path d="M22.707 11.294l-6-6A.997.997 0 0 0 16 5.001H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a.997.997 0 0 0 .707-.293l6-6a.999.999 0 0 0 0-1.414zm-7.121 5.707H3v-10h12.586l5 5-5 5z" />
    </g>
  </svg>
);

export default SvgComponent;
