import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 19a6.992 6.992 0 0 1 4-6.317v-5.32c0-.467-.164-.921-.463-1.28L11.068.72A1.991 1.991 0 0 0 9.531 0H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h10.08a7.002 7.002 0 0 1-.08-1zM5 7H3V4h2v3zm3 0H6V4h2v3zM23.707 19.292L19 14.585l-4.707 4.707 1.414 1.414L18 18.413V24h2v-5.587l2.293 2.293z" />
    </g>
  </svg>
);

export default SvgComponent;
