import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17.414 6l-4.707-4.707a.999.999 0 0 0-1.414 0L6.586 6H3v11a1 1 0 0 0 .471.848l8 5a.998.998 0 0 0 1.058 0l8-5A1 1 0 0 0 21 17V6h-3.586zM12 3.414L14.586 6H9.414L12 3.414zm7 13.031l-7 4.375-7-4.375V8h14v8.445z" />
      <path d="M10 14l-1 3 3-2 3 2-1-3 2-2h-3l-1-3-1 3H8z" />
    </g>
  </svg>
);

export default SvgComponent;
