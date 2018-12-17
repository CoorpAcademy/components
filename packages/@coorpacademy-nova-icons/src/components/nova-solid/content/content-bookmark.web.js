import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M7 2H4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3V2zM20 2h-3v11l-2.5-2-2.5 2V2H9v20h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
