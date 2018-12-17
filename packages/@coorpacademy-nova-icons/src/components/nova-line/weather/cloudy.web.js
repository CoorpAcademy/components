import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M15 7a6.961 6.961 0 0 0-6.437 4.254A4.959 4.959 0 0 0 7 11c-2.757 0-5 2.243-5 5s2.243 5 5 5h8c3.86 0 7-3.14 7-7 0-3.859-3.14-7-7-7zm0 12H7c-1.654 0-3-1.346-3-3s1.346-3 3-3c.569 0 1.129.167 1.619.482a.998.998 0 0 0 1.516-.614A4.975 4.975 0 0 1 15 9c2.757 0 5 2.243 5 5s-2.243 5-5 5z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
