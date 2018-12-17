import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M15.407 10H1.42l1.604 7.217A.998.998 0 0 0 4 18h8v-2a6.991 6.991 0 0 1 3.407-6zM20 9V7.001h-3.42L12.868.504l-1.736.992 3.145 5.505H5.723l3.145-5.505L7.132.504 3.42 7.001H0V9zM22.999 15c0-2.206-1.794-4-4-4s-4 1.794-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .898 2 2h-4c0-1.102.897-2 2-2zm3 9h-6v-5h6v5z" />
      <circle cx={19} cy={19} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
