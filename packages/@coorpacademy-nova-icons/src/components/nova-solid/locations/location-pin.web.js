import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M17 15.54v1.9c1.828.367 3 .928 3 1.56 0 1.106-3.581 2-8 2s-8-.894-8-2c0-.632 1.173-1.193 3-1.56v-1.9c-2.986.691-5 1.98-5 3.46 0 2.21 4.477 4 10 4s10-1.79 10-4c0-1.48-2.014-2.769-5-3.46z" />
      <path d="M18 9A6 6 0 0 0 6 9c0 4 6 11 6 11s6-7 6-11zm-8 0a2 2 0 1 1 4.001.001A2 2 0 0 1 10 9z" />
    </g>
  </svg>
);

export default SvgComponent;
