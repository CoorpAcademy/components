import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M9 15v-5H7v7h14v-2z" />
      <path d="M15 14h2V7H3v2h12zM7 2h2v4H7zM15 18h2v4h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
