import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 2C6.486 2 2 6.486 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
      <path d="M10 12v6h2v-3h4v-2h-4v-1h5v-2h-5c-1.103 0-2 .898-2 2z" />
      <circle cx={9} cy={8} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
