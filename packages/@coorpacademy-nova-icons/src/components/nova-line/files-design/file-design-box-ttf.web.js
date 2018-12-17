import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 6.002H2c-1.103 0-2 .897-2 2v9c0 1.102.897 2 2 2h20c1.103 0 2-.898 2-2v-9c0-1.103-.897-2-2-2zm-20 11v-9h20l.001 9H2z" />
      <path d="M14.625 10.752v5.25h1.75v-2.625H19v-1.75h-2.625v-.875h3.5v-1.75h-3.5c-.965 0-1.75.785-1.75 1.75zM4.125 9.002v1.75h1.75v5.25h1.75v-5.25h3.5v5.25h1.75v-5.25h1.75v-1.75z" />
    </g>
  </svg>
);

export default SvgComponent;
