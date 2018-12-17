import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14.998 7h-13c-1.104 0-2 .897-2 2v9c0 1.103.896 2 2 2h1v4l5.334-4h6.666c1.104 0 2-.897 2-2V9c0-1.103-.896-2-2-2zM20.998 3V0h-2v3h-3v2h3v3h2V5h3V3z" />
    </g>
  </svg>
);

export default SvgComponent;
