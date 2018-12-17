import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 9V7.001h-3.42L12.868.504l-1.736.992 3.145 5.505H5.724l3.144-5.505L7.132.504 3.42 7.001H0V9zM18.539 10.186L18.58 10H1.42l1.605 7.217A.997.997 0 0 0 4 18h10.35a5.942 5.942 0 0 1-.35-2 5.998 5.998 0 0 1 4.539-5.814z" />
      <path d="M20 12c-2.206 0-4 1.794-4 4h2c0-1.102.897-2 2-2s2 .898 2 2c0 1.103-.897 2-2 2h-1v3h2v-1.127A4.004 4.004 0 0 0 24 16c0-2.206-1.794-4-4-4z" />
      <circle cx={20} cy={23} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
