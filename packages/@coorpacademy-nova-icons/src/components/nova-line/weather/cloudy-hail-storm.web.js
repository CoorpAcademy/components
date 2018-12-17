import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M15 14h-3v-4l-4 5h3v4z" />
      <path d="M15 2a6.961 6.961 0 0 0-6.437 4.254A4.959 4.959 0 0 0 7 6c-2.757 0-5 2.243-5 5 0 1.785.962 3.446 2.511 4.337l.997-1.734A3.012 3.012 0 0 1 4 11c0-1.654 1.346-3 3-3 .569 0 1.129.167 1.619.482a.998.998 0 0 0 1.516-.614A4.975 4.975 0 0 1 15 4c2.757 0 5 2.243 5 5a5.02 5.02 0 0 1-2.505 4.334l1 1.732A7.025 7.025 0 0 0 22 9c0-3.859-3.14-7-7-7z" />
      <circle cx={8} cy={18} r={1} />
      <circle cx={16} cy={18} r={1} />
      <circle cx={14} cy={21} r={1} />
      <circle cx={5} cy={21} r={1} />
      <circle cx={10} cy={21} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
