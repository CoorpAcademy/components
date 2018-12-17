import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M17 14.999v2h1.251A7.929 7.929 0 0 1 13 19.934v-8.935h2.936v-2H13v-3h-2v3H8v2h3v8.935a7.929 7.929 0 0 1-5.25-2.935H7v-2H2.321l.718 1.446a9.95 9.95 0 0 0 8.96 5.554 9.948 9.948 0 0 0 8.96-5.554l.718-1.446H17z" />
      <circle cx={12} cy={2.999} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
