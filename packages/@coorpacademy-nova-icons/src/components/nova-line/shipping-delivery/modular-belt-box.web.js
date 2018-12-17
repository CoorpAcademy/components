import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M2 18h2v2H2v2h20v-2h-2v-2h2v-2H2v2zm4 0h2v2H6v-2zm4 0h4v2h-4v-2zm8 2h-2v-2h2v2zM21 2H9a1 1 0 0 0-1 1v4H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-5 2v2h-2V4h2zM4 9h1v2h2V9h1v4H4V9zm16 4H10V4h2v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4h2v9z" />
    </g>
  </svg>
);

export default SvgComponent;
