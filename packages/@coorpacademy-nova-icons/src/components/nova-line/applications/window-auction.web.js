import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 2H3c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 4h-8V4h8v2zM8 6V4h3v2H8zM6 4v2H3V4h3zM3 20V8h17.999l-.002 12H3z" />
      <path d="M14.707 12.708a.999.999 0 0 0 0-1.414l-2-2a.997.997 0 0 0-1.414 0l-4 4a.999.999 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414 0L12 15.414l3.293 3.293 1.414-1.414L13.414 14l1.293-1.292z" />
    </g>
  </svg>
);

export default SvgComponent;
