import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 3.003h2v2h-2zM11 7.003h2v2h-2zM7 3.003h2v2H7zM3 3.003h2v2H3zM3 7.003h2v2H3zM11 15.003h2v2h-2zM3 15.003h2v2H3zM7 19.003h2v2H7zM3 19.003h2v2H3zM11 19.003h2v2h-2zM15 19.003h2v2h-2zM19 7.003h2v2h-2zM19 15.003h2v2h-2zM15 3.003h2v2h-2zM19 19.003h2v2h-2zM19 3.003h2v2h-2zM3 11.003h18v2H3z" />
    </g>
  </svg>
);

export default SvgComponent;
