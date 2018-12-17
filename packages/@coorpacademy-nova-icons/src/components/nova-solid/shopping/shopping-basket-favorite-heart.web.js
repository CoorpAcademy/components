import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18.58 10H1.42l1.604 7.217A.998.998 0 0 0 4 18h10.09a6.001 6.001 0 0 1 3.732-4.586L18.58 10zM20 9V7.001h-3.42L12.868.504l-1.736.992 3.145 5.505H5.723l3.145-5.505L7.132.504 3.42 7.001H0V9zM22 16c-1.104 0-2 1-2 2 0-1-.896-2-2-2s-2 .895-2 2c0 3 4 6 4 6s4-3 4-6a2 2 0 0 0-2-2z" />
    </g>
  </svg>
);

export default SvgComponent;
