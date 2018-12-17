import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14 9V2H2v12h7V9zM15 10v5h-5v7h12V10z" />
    </g>
  </svg>
);

export default SvgComponent;
