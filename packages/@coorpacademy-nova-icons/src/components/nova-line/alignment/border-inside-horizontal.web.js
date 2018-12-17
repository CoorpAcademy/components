import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M7 3h2v2H7zM3 7h2v2H3zM3 11h2v2H3zM7 11h2v2H7zM15 11h2v2h-2zM3 15h2v2H3zM7 19h2v2H7zM3 3h2v2H3zM3 19h2v2H3zM15 19h2v2h-2zM19 19h2v2h-2zM19 7h2v2h-2zM19 11h2v2h-2zM19 15h2v2h-2zM15 3h2v2h-2zM19 3h2v2h-2zM11 3h2v18h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
