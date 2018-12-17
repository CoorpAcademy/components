import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 9V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.104.897 2.001 2 2.001h8V19H3V8h2v5.586l2.293-2.293a.999.999 0 0 1 1.414 0L10 12.586V11c0-1.1.9-2 2-2h6zm-6-8l5 5h-5V1z" />
      <path d="M5 16.414V17h5v-1.586l-2-2zM12 10.995v7c0 3.812 3.797 5.58 5.804 5.98l.196.04.196-.039C20.203 23.575 24 21.808 24 17.995v-7H12zm9 7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z" />
    </g>
  </svg>
);

export default SvgComponent;
