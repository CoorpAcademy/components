import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 7V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v10H2v2h9v2h2v-2h9v-2h-1V8a1 1 0 0 0 1-1zM4 5h16v1H4V5zm15 13H5V8h14v10z" />
      <path d="M7.416 16.812a.999.999 0 0 0 .9.137L11.162 16H14c1.654 0 3-1.346 3-3v-1c0-1.654-1.346-3-3-3h-4c-1.654 0-3 1.346-3 3v4a1 1 0 0 0 .416.812zM9 12c0-.552.449-1 1-1h4c.551 0 1 .448 1 1v1c0 .552-.449 1-1 1h-3c-.107 0-.215.018-.316.051L9 14.612V12z" />
    </g>
  </svg>
);

export default SvgComponent;
