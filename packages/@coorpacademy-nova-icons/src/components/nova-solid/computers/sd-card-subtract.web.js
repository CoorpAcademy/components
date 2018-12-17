import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M15.537 6.082L11.068.72A1.991 1.991 0 0 0 9.531 0H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h12c1 0 2-1.001 2-2V7.362c0-.466-.164-.921-.463-1.28zM5 7H3V4h2v3zm3 0H6V4h2v3zM17 20h6v2h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
