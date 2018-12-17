import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M24 16h-3v-3h-3v3h-3v3h3v5h3v-5h3z" />
      <path d="M17 20h-3v-3.295a9.405 9.405 0 0 0-1.038-.334C12.778 17.851 11.529 19 10 19s-2.778-1.149-2.962-2.629C3.97 17.182 2 19.27 2 22v2h15v-4zM10 5c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zm0 8c-1.654 0-3-1.346-3-3h6c0 1.654-1.346 3-3 3z" />
    </g>
  </svg>
);

export default SvgComponent;
