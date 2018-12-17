import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17.251 10.75a.875.875 0 0 0-.875.875v1.75a.875.875 0 0 0 1.75 0v-1.75a.875.875 0 0 0-.875-.875z" />
      <path d="M22.001 6h-20a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM7.626 10.75h-.875v3.5h.875V16h-3.5v-1.75h.875v-3.5h-.875V9h3.5v1.75zm6.125 0h-3.062a.438.438 0 1 0 0 .876h.875c1.207 0 2.188.981 2.188 2.188S12.77 16 11.564 16H8.501v-1.75h3.062a.438.438 0 1 0 0-.876h-.875A2.19 2.19 0 0 1 8.5 11.186 2.192 2.192 0 0 1 10.689 9h3.062v1.75zm6.125 2.625A2.628 2.628 0 0 1 17.251 16a2.628 2.628 0 0 1-2.625-2.625v-1.75A2.628 2.628 0 0 1 17.251 9a2.628 2.628 0 0 1 2.625 2.625v1.75z" />
    </g>
  </svg>
);

export default SvgComponent;
