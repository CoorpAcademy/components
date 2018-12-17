import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 2H3c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 4h-8V4h8v2zM8 6V4h3v2H8zM6 4v2H3V4h3zM3 20V8h17.999l-.002 12H3z" />
      <circle cx={6} cy={11} r={1} />
      <path d="M9 10h10v2H9z" />
      <circle cx={6} cy={14} r={1} />
      <path d="M9 13h10v2H9z" />
      <circle cx={6} cy={17} r={1} />
      <path d="M9 16h10v2H9z" />
    </g>
  </svg>
);

export default SvgComponent;
