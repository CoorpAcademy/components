import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 22h20v2H2zM10 13h4v8h-4zM4 9h4v12H4zM16 17h4v4h-4zM20 9v2.587L8.707.294 7.293 1.707 18.586 13H16v2h6V9z" />
    </g>
  </svg>
);

export default SvgComponent;
