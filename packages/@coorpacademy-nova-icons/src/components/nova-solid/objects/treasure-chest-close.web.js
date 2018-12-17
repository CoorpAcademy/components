import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M8.557 4H7C4.795 4 3 5.794 3 8v2h3.307l2.25-6zM8.443 10h7.114l-2.25-6h-2.614zM17 4h-1.557l2.25 6H21V8c0-2.206-1.795-4-4-4zM3 19a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8H3v8zm8.999-6.5a1 1 0 1 1 0 2.002 1 1 0 0 1 0-2.002zM6 13.002h3V16h6v-2.998h3v4H6v-4z" />
    </g>
  </svg>
);

export default SvgComponent;
