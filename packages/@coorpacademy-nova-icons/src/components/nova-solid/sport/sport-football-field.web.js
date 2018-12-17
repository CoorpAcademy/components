import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 4v4.143c1.72.447 3 1.999 3 3.857s-1.28 3.411-3 3.858V20h11v-4h-4V8h4V4H13zM8 12c0-1.858 1.28-3.41 3-3.857V4H0v4h4v8H0v4h11v-4.142c-1.72-.447-3-2-3-3.858z" />
      <path d="M0 10h2v4H0zM22 10h2v4h-2z" />
      <circle cx={12} cy={12} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
