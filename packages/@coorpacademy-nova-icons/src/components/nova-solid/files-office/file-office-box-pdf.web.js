import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11.75 10.75v3.5c.965 0 1.75-.785 1.75-1.75s-.785-1.75-1.75-1.75zM5.625 10.75H4.75v1.75h.875c.482 0 .875-.393.875-.875s-.393-.875-.875-.875z" />
      <path d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM5.625 14.25H4.75V16H3V9h2.625a2.629 2.629 0 0 1 2.625 2.625 2.628 2.628 0 0 1-2.625 2.625zM11.75 16H10V9h1.75c1.93 0 3.5 1.569 3.5 3.5s-1.57 3.5-3.5 3.5zm10.5-5.25h-3.5v.875h2.625v1.75H18.75V16H17v-5.25c0-.965.785-1.75 1.75-1.75h3.5v1.75z" />
    </g>
  </svg>
);

export default SvgComponent;
