import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M14 8h-4l-3 7 5 8 5-8-3-7zm-2 7a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 15zM15 7V3a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4h6z" />
    </g>
  </svg>
);

export default SvgComponent;
