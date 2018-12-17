import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 10.001h4v4H8zM6 10.001H1.201a10.064 10.064 0 0 0 0 4H6v-4zM8 8.001h4v-6h-1a9.95 9.95 0 0 0-3 .461v5.539zM8 16.001v5.539a9.98 9.98 0 0 0 3 .461h1v-6H8zM6 8.001V3.353a10.055 10.055 0 0 0-4.159 4.648H6zM6 16.001H1.841A10.045 10.045 0 0 0 6 20.647v-4.646z" />
      <g>
        <circle cx={18} cy={5.001} r={3} />
        <path d="M18 8.001c-2.757 0-5 2.242-5 5v3a1 1 0 0 0 1 1h1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h1a1 1 0 0 0 1-1v-3c0-2.758-2.243-5-5-5z" />
      </g>
    </g>
  </svg>
);

export default SvgComponent;
