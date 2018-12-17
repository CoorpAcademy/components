import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M21 10H11a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8c.265 0 .52-.105.707-.294l2-2A.992.992 0 0 0 22 19v-8a1 1 0 0 0-1-1zm-3 11v-3h3l-3 3z" />
      <path d="M2 2v20h6v-2H5v-2h3v-2H5v-2h3v-2H5v-2h3V8h2V5h2v3h2V5h2v3h2V5h2v3h2V2H2zm4 4H4V4h2v2z" />
    </g>
  </svg>
);

export default SvgComponent;
