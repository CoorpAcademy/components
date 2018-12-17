import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5.583 9.396a3.812 3.812 0 0 0 3.813-3.813A3.813 3.813 0 0 0 6.877 2c.148.404.23.838.23 1.294A3.812 3.812 0 0 1 2 6.878a3.812 3.812 0 0 0 3.583 2.518zM15 7a6.961 6.961 0 0 0-6.437 4.254A4.959 4.959 0 0 0 7 11c-2.757 0-5 2.243-5 5 0 1.785.962 3.446 2.511 4.337l.997-1.734A3.012 3.012 0 0 1 4 16c0-1.654 1.346-3 3-3 .569 0 1.129.167 1.619.482a1.001 1.001 0 0 0 1.516-.614A4.975 4.975 0 0 1 15 9c2.757 0 5 2.243 5 5a5.02 5.02 0 0 1-2.505 4.334l1 1.732A7.025 7.025 0 0 0 22 14c0-3.859-3.14-7-7-7z" />
      <circle cx={8.5} cy={18} r={1} />
      <circle cx={6.5} cy={21} r={1} />
      <circle cx={12} cy={18} r={1} />
      <circle cx={10} cy={21} r={1} />
      <circle cx={15.5} cy={18} r={1} />
      <circle cx={13.5} cy={21} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
