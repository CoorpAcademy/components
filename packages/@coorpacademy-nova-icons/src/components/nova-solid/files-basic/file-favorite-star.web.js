import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 9V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h9.76A7.96 7.96 0 0 1 10 17a8 8 0 0 1 8-8zm-6-8l5 5h-5V1zM3 9h9v2H3V9zm6 6H3v-2h6v2z" />
      <path d="M24 16.286h-4.286L18 12l-1.715 4.286H12l3.708 3.13L13.714 24 18 21.166 22.285 24l-1.993-4.584z" />
    </g>
  </svg>
);

export default SvgComponent;
