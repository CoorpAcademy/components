import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 9h8v2H4zM4 13h6v2H4z" />
      <path d="M2 2h10v4h4l.001 11H18V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h13v-2H2V2zM17 19h6v2h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
