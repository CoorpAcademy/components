import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.005h24v24H0z" />
    <g fill="currentColor">
      <path d="M17 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-1 6v-4l3 2-3 2z" />
      <path d="M14 8V4c0-1.104-.897-2-2-2H4c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2v-4H4V8h10zm-2-4v2H4V4h8zm0 14v2H4v-2h8z" />
    </g>
  </svg>
);

export default SvgComponent;
