import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8.5 7.75h2.25v-1.5H8.5V5.5h3V4h-3C7.673 4 7 4.673 7 5.5V10h1.5V7.75z" />
      <path d="M19 0H5C3.897 0 3 .898 3 2v20c0 1.104.897 2 2 2h8c.819 0 1.835-.42 2.414-1L20 18.414c.58-.579 1-1.595 1-2.414V2c0-1.102-.897-2-2-2zM5 22V2h14v14h-3c-1.654 0-3 1.346-3 3v3H5zm10-1.414V19c0-.551.449-1 1-1h1.586L15 20.586z" />
      <path d="M7 12h10v2H7zM7 16h4v2H7zM13 8h4v2h-4z" />
    </g>
  </svg>
);

export default SvgComponent;
