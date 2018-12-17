import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17.414 4H4c-1.103 0-2 .898-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8.586L17.414 4zM4 18V6h12v4h4l.001 8H4z" />
      <path d="M10.006 14.475l-1.527-2.452L6 16h12l-4.472-7.173z" />
    </g>
  </svg>
);

export default SvgComponent;
