import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5.625 10.75H4.75v1.75h.875c.482 0 .875-.393.875-.875s-.393-.875-.875-.875z" />
      <path d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM8.25 16H6.224l-1.022-1.75H4.75V16H3V9h2.625a2.629 2.629 0 0 1 2.625 2.625c0 .943-.504 1.765-1.253 2.227L8.25 16zm6.125-5.25h-1.75V16h-1.75v-5.25h-1.75V9h5.25v1.75zm6.625 0h-3.5v.875h2.625v1.75H17.5V16h-1.75v-5.25c0-.965.785-1.75 1.75-1.75H21v1.75z" />
    </g>
  </svg>
);

export default SvgComponent;
