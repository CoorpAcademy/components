import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 14.81V7.362c0-.467-.164-.921-.463-1.28L11.068.72A1.991 1.991 0 0 0 9.531 0H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h11a5.992 5.992 0 0 1 3-5.19zM5 7H3V4h2v3zm3 0H6V4h2v3zM18 23.414l-3.707-3.707 1.414-1.414L18 20.586l4.293-4.293 1.414 1.414z" />
    </g>
  </svg>
);

export default SvgComponent;
