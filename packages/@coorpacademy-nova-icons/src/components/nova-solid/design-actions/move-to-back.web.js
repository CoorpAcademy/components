import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M1 15h2v2H1zM1 12h2v2H1zM1 9h2v2H1zM1 6h2v2H1zM1 18h2v2H1zM1 21h2v2H1zM4 21h2v2H4zM7 21h2v2H7zM10 21h2v2h-2zM13 21h2v2h-2zM16 21h2v2h-2zM5 2h17v17H5z" />
    </g>
  </svg>
);

export default SvgComponent;
