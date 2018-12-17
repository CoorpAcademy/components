import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M19.051 11.371L22 11.002l-16-7 .898 2.051zM10.896 13.898l-.127 1.006L13 20.001l.809-6.468z" />
      <path d="M10 13.002l8-1-16-7 7 15.999z" />
    </g>
  </svg>
);

export default SvgComponent;
