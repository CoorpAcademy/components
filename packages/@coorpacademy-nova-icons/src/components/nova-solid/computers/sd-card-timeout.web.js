import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 18.016c0-3.727 2.552-6.848 6-7.738V7.362c0-.467-.164-.921-.463-1.28L11.068.72A1.991 1.991 0 0 0 9.531 0H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h8.258A8.016 8.016 0 0 1 10 18.016zM5 7H3V4h2v3zm3 0H6V4h2v3z" />
      <path d="M18 12c-3.309 0-6 2.692-6 6s2.691 6 6 6 6-2.692 6-6-2.691-6-6-6zm3 7h-4v-5h2v3h2v2z" />
    </g>
  </svg>
);

export default SvgComponent;
