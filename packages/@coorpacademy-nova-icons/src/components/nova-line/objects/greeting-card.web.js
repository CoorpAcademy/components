import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M19 2H6v.007c-.19 0-.38.048-.545.155A1 1 0 0 0 5 3v14c0 .396.232.754.594.914l9 4A1 1 0 0 0 16 21v-3h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-5 17.461L7 16.35V4.54l7 3.11v11.811zM18 16h-2V7a.999.999 0 0 0-.594-.914L10.713 4H18v12z" />
      <path d="M10 15.374L11 16v-1.8l2 .8-2.5-8L8 13l2 .801z" />
    </g>
  </svg>
);

export default SvgComponent;
