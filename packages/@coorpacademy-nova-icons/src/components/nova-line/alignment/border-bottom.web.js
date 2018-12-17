import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 3h2v2h-2zM11 7h2v2h-2zM7 3h2v2H7zM3 3h2v2H3zM19 3h2v2h-2zM3 7h2v2H3zM3 11h2v2H3zM7 11h2v2H7zM11 11h2v2h-2zM11 15h2v2h-2zM15 11h2v2h-2zM3 15h2v2H3zM19 7h2v2h-2zM19 11h2v2h-2zM19 15h2v2h-2zM15 3h2v2h-2zM3 19h18v2H3z" />
    </g>
  </svg>
);

export default SvgComponent;
