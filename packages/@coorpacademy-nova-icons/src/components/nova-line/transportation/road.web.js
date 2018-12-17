import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17.976 2.783A1 1 0 0 0 17 2H7a1 1 0 0 0-.976.783l-4 18A1 1 0 0 0 3 22h18a1.002 1.002 0 0 0 .976-1.217l-4-18zM13 20v-4h-2v4H4.247L7.802 4H11v4h2V4h3.198l3.556 16H13z" />
      <path d="M11 10h2v4h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
