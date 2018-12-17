import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 4v5.535l3.446 2.297 1.109-1.664L10 8.465V4z" />
      <path d="M15.315 12h2.16c.334-.94.525-1.947.525-3 0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9a8.96 8.96 0 0 0 3-.524v-2.161A6.938 6.938 0 0 1 9 16c-3.86 0-7-3.14-7-7s3.14-7 7-7c3.859 0 7 3.14 7 7 0 1.075-.25 2.09-.685 3zM19 14.585l-4.707 4.707 1.414 1.414L18 18.413V24h2v-5.587l2.293 2.293 1.414-1.414z" />
    </g>
  </svg>
);

export default SvgComponent;
