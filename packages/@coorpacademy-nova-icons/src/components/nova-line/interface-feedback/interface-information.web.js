import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M12 22C6.486 22 2 17.515 2 12 2 6.487 6.486 2 12 2s10 4.486 10 10c0 5.515-4.486 10-10 10zm0-18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"
      fill="currentColor"
    />
    <path
      d="M13 15v-4a1 1 0 0 0-1-1h-2v2h1v3H9v2h6v-2h-2z"
      fill="currentColor"
    />
    <circle cx={12} cy={8} r={1.25} fill="currentColor" />
  </svg>
);

export default SvgComponent;
