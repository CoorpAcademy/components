import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M2 22h18V9zM4.651 13.759L10 9.175V12h2V6H6v2h2.297l-4.948 4.241z" />
    </g>
  </svg>
);

export default SvgComponent;
