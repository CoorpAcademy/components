import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20.348 9.633l-1.854.749A7.008 7.008 0 0 1 12 20c-3.86 0-7-3.14-7-7a7.028 7.028 0 0 1 3.5-6.064l-1.002-1.73A9.034 9.034 0 0 0 3 13c0 4.962 4.038 9 9 9s9-4.038 9-9a8.93 8.93 0 0 0-.652-3.367z" />
      <path d="M11 2h2v10h-2z" />
      <circle cx={17} cy={6} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
