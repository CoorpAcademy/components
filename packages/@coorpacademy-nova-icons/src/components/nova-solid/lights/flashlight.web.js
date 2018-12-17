import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001.001H24v24.001H-.001z" />
    <g fill="currentColor">
      <path d="M4 9H2c-1.104 0-2 .898-2 2v2c0 1.102.896 2 2 2h2V9zM5 9h10v6H5zM23 6c-.123 0-5.057.829-5.178.849C16.801 7.019 16 7.964 16 9v6c0 1.036.801 1.982 1.822 2.151.12.02 5.056.849 5.178.849a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
