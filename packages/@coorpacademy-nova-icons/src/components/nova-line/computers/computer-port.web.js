import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      d="M12 22.001c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"
      fill="currentColor"
    />
    <circle cx={8} cy={13.001} r={2} fill="currentColor" />
    <circle cx={16} cy={13.001} r={2} fill="currentColor" />
    <circle cx={12} cy={16.001} r={2} fill="currentColor" />
    <path fill="currentColor" d="M11 6.001h2v5h-2z" />
  </svg>
);

export default SvgComponent;
