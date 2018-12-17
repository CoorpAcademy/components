import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001-.002H24v24.001H-.001z" />
    <g fill="currentColor">
      <path d="M18 6.142V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3.142c-1.72.448-3 2-3 3.858v8c0 2.206 1.794 4 4 4h10c2.206 0 4-1.794 4-4v-8c0-1.858-1.28-3.41-3-3.858zM16 6h-1V4h1v2zm-5 0V4h2v2h-2zM8 4h1v2H8V4zm11 14c0 1.103-.897 2-2 2H7c-1.103 0-2-.897-2-2v-8c0-1.104.897-2 2-2h10c1.103 0 2 .896 2 2v8z" />
      <path d="M16 10.414L14.586 9 13 10.586V9h-2v3.586l-1 1V12H8v3.586l-1.707 1.707 1.414 1.414L9.414 17H13v-2h-1.586l1-1H16v-2h-1.586z" />
    </g>
  </svg>
);

export default SvgComponent;
