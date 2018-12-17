import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9.376 10.75h-.875v1.75h.875a.876.876 0 0 0 0-1.75z" />
      <path d="M22.001 6h-20a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM9.376 14.25h-.875V16h-1.75V9h2.625a2.629 2.629 0 0 1 2.625 2.625 2.628 2.628 0 0 1-2.625 2.625zM17.251 16h-4.375V9h1.75v5.25h2.625V16z" />
    </g>
  </svg>
);

export default SvgComponent;
