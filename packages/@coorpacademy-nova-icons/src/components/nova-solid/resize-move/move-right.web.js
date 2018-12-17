import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .005h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.293 8.707L18.586 11H10v2h8.586l-2.293 2.293 1.414 1.414L22.414 12l-4.707-4.707zM6 3H4c-1.103 0-2 .897-2 2v14c0 1.104.897 2 2 2h2c1.103 0 2-.896 2-2V5c0-1.103-.897-2-2-2z" />
    </g>
  </svg>
);

export default SvgComponent;
