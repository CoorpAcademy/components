import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14.895 8.448l-1.79-.895L12 9.765l-1.105-2.212-1.79.895L10.882 12H9v2h2v3h2v-3h2v-2h-1.882z" />
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8c0 4.412-3.589 8-8 8z" />
    </g>
  </svg>
);

export default SvgComponent;
