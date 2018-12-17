import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M8.555 19c.693 1.19 1.969 2 3.445 2s2.752-.81 3.445-2h-6.89z"
    />
    <g fill="currentColor">
      <path d="M15.734 4.321A5.946 5.946 0 0 0 12 3a6 6 0 0 0-6 6v5l-.002.058 9.736-9.737zM18 14V9c0-.401-.041-.792-.116-1.171l4.708-4.708-1.414-1.414L2.707 20.178l1.414 1.415L7.713 18H21v-1a3 3 0 0 1-3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
