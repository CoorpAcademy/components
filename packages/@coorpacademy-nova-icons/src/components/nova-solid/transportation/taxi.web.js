import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <g fill="currentColor">
      <circle cx={19} cy={20} r={2} />
      <circle cx={5} cy={20} r={2} />
      <path d="M14 5h-2l-1 2h4zM23 12h-2l-2-4H7l-2 4H4a4 4 0 0 0-4 4v3a1 1 0 0 0 1 1h1a3.001 3.001 0 0 1 6 0h8a3.001 3.001 0 0 1 6 0h1a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM7 16H4v-2h3v2zm5 0H9v-2h3v2zm1-4H7l1-2h5v2zm4 4h-3v-2h3v2zm-2-4v-2h3l1 2h-4zm7 4h-3v-2h3v2z" />
    </g>
  </svg>
);

export default SvgComponent;
