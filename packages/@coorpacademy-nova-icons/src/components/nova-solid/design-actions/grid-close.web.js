import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 10h4v4H4zM10 14h4v-3.686a6.234 6.234 0 0 1-.19-.314H10v4zM4 16h4v4H4z" />
      <path d="M16 22H2V8h11.09A5.998 5.998 0 0 1 13 7c0-.341.035-.672.09-1H0v18h18V12.911a5.957 5.957 0 0 1-2-.721V22z" />
      <path d="M10 16h4v4h-4zM22.707 4.707l-1.414-1.414L19 5.586l-2.293-2.293-1.414 1.414L17.586 7l-2.293 2.293 1.414 1.414L19 8.414l2.293 2.293 1.414-1.414L20.414 7z" />
    </g>
  </svg>
);

export default SvgComponent;
