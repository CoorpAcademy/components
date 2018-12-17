import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M4 4h16v4H4zM7 9h4v13H7zM13 9h4v13h-4zM19 14h4v8h-4zM1 14h4v8H1z" />
    </g>
  </svg>
);

export default SvgComponent;
