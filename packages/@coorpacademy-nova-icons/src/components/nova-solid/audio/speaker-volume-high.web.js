import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11.383 3.079a1.002 1.002 0 0 0-1.09.217L6 8.002H3c-.55 0-1 .451-1 1v6c0 .55.45 1 1 1h3l4.293 4.708A1.002 1.002 0 0 0 12 20.002v-16a.998.998 0 0 0-.617-.923zM14 5.002v2c2.757 0 5 2.244 5 5 0 2.757-2.243 5-5 5v2c3.86 0 7-3.139 7-7 0-3.859-3.14-7-7-7z" />
      <path d="M17 12.002c0-1.653-1.346-3-3-3v2c.551 0 1 .449 1 1 0 .551-.449 1-1 1v2c1.654 0 3-1.345 3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
