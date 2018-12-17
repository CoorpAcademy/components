import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <g fill="currentColor">
      <circle cx={3.5} cy={19.5} r={2.5} />
      <path d="M22 17.051V5a.997.997 0 0 0-.485-.857l-5-3-1.029 1.715L20 5.566v6.113L15.485 18H8.899A5.008 5.008 0 0 0 4 14v2c1.654 0 3 1.346 3 3a1 1 0 0 0 1 1h8c.323 0 .626-.156.814-.418L20 15.121v2.391c-.604.457-1 1.174-1 1.988a2.5 2.5 0 1 0 3-2.449z" />
    </g>
  </svg>
);

export default SvgComponent;
