import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 9.001v-2h-3.42L12.868.504l-1.736.994 3.145 5.503H5.723l3.145-5.503L7.132.504 3.42 7.001H0v2zM3.023 17.218a1 1 0 0 0 .977.783h10V12c0-1.097.894-1.994 1.99-1.999H1.42l1.603 7.217zM21 17h-2a1 1 0 0 1 0-2h4v-2h-2v-1h-2v1c-1.654 0-3 1.346-3 3s1.346 3 3 3h2a1 1 0 0 1 0 2h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3s-1.346-3-3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
