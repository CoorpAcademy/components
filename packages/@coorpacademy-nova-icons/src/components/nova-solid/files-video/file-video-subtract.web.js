import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 15.424V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h13.421A4.965 4.965 0 0 1 15 20.002a4.995 4.995 0 0 1 3-4.578zM5 17V9l8 4.003L5 17zm7-11V1l5 5h-5zM17 19.002h6v2h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
