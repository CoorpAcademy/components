import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M19.051 11.371l2.949-.37-16-7 .897 2.052zM10.896 13.897l-.126 1.007L13 20.001l.809-6.468z" />
    </g>
    <path fill="currentColor" d="M2 5.001l7 16 1-8 8-1z" />
  </svg>
);

export default SvgComponent;
