import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path
      fill="currentColor"
      d="M21.708 6.293l-4.707-4.708-4.707 4.708 1.414 1.414 2.293-2.293V12h2V5.414l2.293 2.293zM16.001 13h2v2h-2zM16.001 16h2v2h-2zM16.001 19h2v2h-2z"
    />
    <g fill="currentColor">
      <circle cx={7.001} cy={4.999} r={3} />
      <path d="M7.001 7.999c-2.757 0-5 2.243-5 5v3a1 1 0 0 0 1 1h1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h1a1 1 0 0 0 1-1v-3c0-2.756-2.243-5-5-5z" />
    </g>
  </svg>
);

export default SvgComponent;
