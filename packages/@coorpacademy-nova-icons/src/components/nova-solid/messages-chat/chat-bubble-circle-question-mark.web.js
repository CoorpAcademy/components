import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18.998 14c-1.1 0-2-.9-2-2V9.19a6.019 6.019 0 0 1-2.393-2.575A10.933 10.933 0 0 0 10.998 6c-5.514 0-10 4.037-10 9 0 1.735.541 3.392 1.572 4.836L-.002 24h11c5.514 0 10-4.037 10-9 0-.338-.025-.671-.065-1h-1.935zM19.998 0c-2.206 0-4 1.794-4 4h2c0-1.102.898-2 2-2 1.103 0 2 .898 2 2s-.897 2-2 2h-1v3h2V7.873a4.005 4.005 0 0 0 3-3.873c0-2.206-1.794-4-4-4z" />
      <circle cx={19.998} cy={11} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
