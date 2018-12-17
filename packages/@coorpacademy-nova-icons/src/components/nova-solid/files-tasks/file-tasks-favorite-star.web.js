import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 4h-2a2 2 0 0 0-4 0H8v3h8V4z" />
      <path d="M19 5h-1v3H6V5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-3.5 15L12 17.502 8.5 20l1.5-4.002L7 14h3.5l1.507-4 1.493 4H17l-3 1.998L15.5 20z" />
    </g>
  </svg>
);

export default SvgComponent;
