import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 6.815V10a1 1 0 1 0 2 0V6.815a2.987 2.987 0 0 0 2-2.817 2.999 2.999 0 0 0-5.999.001A2.986 2.986 0 0 0 10 6.815z" />
      <path d="M19 8h-5v4H8V8H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13c.265 0 .52-.105.707-.294l2-2A.993.993 0 0 0 20 20V9a1 1 0 0 0-1-1zM6 14h10v2H6v-2zm8 6H6v-2h8v2zm2 2v-3h3l-3 3z" />
    </g>
  </svg>
);

export default SvgComponent;
