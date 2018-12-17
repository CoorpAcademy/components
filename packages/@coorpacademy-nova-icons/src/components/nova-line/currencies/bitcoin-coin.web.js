import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8c0 4.412-3.589 8-8 8z" />
      <path d="M13 8.051V7h-2v1H9v8h2v1h2v-1.05c1.14-.233 2-1.243 2-2.45 0-.565-.195-1.081-.513-1.5.318-.418.513-.934.513-1.5 0-1.207-.86-2.217-2-2.449zm0 2.449a.5.5 0 0 1-.5.5H11v-1h1.5a.5.5 0 0 1 .5.5zm-.5 3.5H11v-1h1.5a.5.5 0 0 1 0 1z" />
    </g>
  </svg>
);

export default SvgComponent;
