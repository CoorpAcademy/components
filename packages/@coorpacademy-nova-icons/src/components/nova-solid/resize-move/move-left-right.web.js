import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .004h24v24H0z" />
    <g fill="currentColor">
      <path d="M21.924 13.617A1 1 0 0 0 21 13H6v2h12.586l-3.293 3.293 1.414 1.414 5-5c.286-.286.371-.716.217-1.09zM2.076 10.383A1 1 0 0 0 3 11h15V9H5.414l3.293-3.293-1.414-1.414-5 5a1.002 1.002 0 0 0-.217 1.09z" />
    </g>
  </svg>
);

export default SvgComponent;
