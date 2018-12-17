import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M6.012 9.902a2.336 2.336 0 0 1 2.321-2.569c.442 0 .878.13 1.26.376a1 1 0 0 0 1.515-.615A3.979 3.979 0 0 1 15 4c2.206 0 4 1.795 4 4h2c0-3.309-2.691-6-6-6a5.966 5.966 0 0 0-5.457 3.508 4.297 4.297 0 0 0-1.21-.175 4.338 4.338 0 0 0-4.312 4.765l1.991-.196z" />
      <path d="M15 8a6.961 6.961 0 0 0-6.437 4.254A4.959 4.959 0 0 0 7 12c-2.757 0-5 2.243-5 5s2.243 5 5 5h8c3.86 0 7-3.14 7-7 0-3.859-3.14-7-7-7zm0 12H7c-1.654 0-3-1.346-3-3s1.346-3 3-3c.569 0 1.129.167 1.619.482a.998.998 0 0 0 1.516-.614A4.975 4.975 0 0 1 15 10c2.757 0 5 2.243 5 5s-2.243 5-5 5z" />
    </g>
  </svg>
);

export default SvgComponent;
