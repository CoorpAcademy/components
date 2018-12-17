import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 10h-1l-1 4h3zM5 14h2.5l2.5-4H8.5zM14.5 10H13l2.5 4H18z" />
      <path d="M19 6h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h10v8H3v7h18V8c0-1.102-.897-2-2-2zm-7.5 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 11.5 6zM14 21a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </g>
  </svg>
);

export default SvgComponent;
