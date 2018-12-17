import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13.26 9.002H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V11.32a7.017 7.017 0 0 1-2.74-2.318zm-1.26 9.5a1.5 1.5 0 1 1-1.5-1.5v-2.771L7 15.372v4.13a1.5 1.5 0 1 1-1.5-1.5v-3.174c0-.326.209-.613.518-.713l5-1.632a.753.753 0 0 1 .983.713v5.306zM19 .587l-4.707 4.708 1.414 1.413L18 4.416v5.586h2V4.416l2.293 2.292 1.414-1.413z" />
    </g>
  </svg>
);

export default SvgComponent;
