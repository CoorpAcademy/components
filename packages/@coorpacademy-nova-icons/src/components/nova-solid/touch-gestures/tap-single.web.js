import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11.5 11.005a3.5 3.5 0 0 0-3.5 3.5v8.5h7v-8.5a3.5 3.5 0 0 0-3.5-3.5zm1.614 5h-3v-1.5a1.5 1.5 0 1 1 3 0v1.5z" />
      <path d="M18 12.069c-.656-2.894-3.245-5.064-6.335-5.064s-5.679 2.17-6.335 5.064l1.864 1.864a4.084 4.084 0 0 1-.029-.429c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5c0 .145-.014.286-.029.429L18 12.069z" />
    </g>
  </svg>
);

export default SvgComponent;
