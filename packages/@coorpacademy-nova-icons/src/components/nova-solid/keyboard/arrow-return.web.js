import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M17 6h-5v2h5c1.654 0 3 1.346 3 3s-1.346 3-3 3H6.414l2.293-2.293-1.414-1.413L2.586 15l4.707 4.706 1.414-1.413L6.414 16H17c2.757 0 5-2.243 5-5s-2.243-5-5-5z"
    />
  </svg>
);

export default SvgComponent;
