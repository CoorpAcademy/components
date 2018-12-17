import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21.293 2.005L17 6.298l-2.293-2.293-1.414 1.414L17 9.126l5.707-5.707zM14 9.002H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-11a2 2 0 0 0-2-2zm-2 9.5a1.5 1.5 0 1 1-1.5-1.5V14.23L7 15.372v4.13a1.5 1.5 0 1 1-1.5-1.5v-3.174c0-.326.209-.613.518-.713l5-1.632a.753.753 0 0 1 .983.713v5.306z" />
    </g>
  </svg>
);

export default SvgComponent;
