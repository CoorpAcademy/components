import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M10 10h4v6h-4zM3 16h5v-6H3v6zm2.5-4.25A1.251 1.251 0 1 1 4.25 13c0-.689.561-1.25 1.25-1.25zM16 8h4.768A9.018 9.018 0 0 0 16 1.95V8zM16 10h5v6h-5zM10 8h4V1.231A9.023 9.023 0 0 0 12 1a9.03 9.03 0 0 0-2 .231V8zM16 18h5v5h-5zM3 18h5v5H3zM10 18h4v5h-4zM8 8V1.95A9.018 9.018 0 0 0 3.232 8H8z" />
    </g>
  </svg>
);

export default SvgComponent;
