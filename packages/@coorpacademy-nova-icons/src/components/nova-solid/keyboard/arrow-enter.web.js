import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20 4h-8v2h7v10H5.414l2.293-2.293-1.414-1.413L1.586 17l4.707 4.706 1.414-1.413L5.414 18H20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"
    />
  </svg>
);

export default SvgComponent;
