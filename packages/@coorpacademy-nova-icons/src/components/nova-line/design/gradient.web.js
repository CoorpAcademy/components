import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M21 2H3c-1.103 0-2 .898-2 2v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2zM3 20V4h18l.001 16H3z" />
      <path d="M5 10h2v2H5zM9 10h2v2H9zM13 10h2v2h-2zM17 10h2v2h-2zM5 14h2v2H5zM7 12h2v2H7zM11 12h2v2h-2zM15 12h2v2h-2zM9 14h2v2H9zM13 14h2v2h-2zM17 14h2v2h-2zM7 16h2v2H7zM11 16h2v2h-2zM15 16h2v2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
