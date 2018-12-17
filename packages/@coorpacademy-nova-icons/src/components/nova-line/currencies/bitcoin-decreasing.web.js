import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 2c4.411 0 8 3.589 8 8a7.95 7.95 0 0 1-.974 3.821l1.573 1.258A9.92 9.92 0 0 0 20 10c0-5.514-4.486-10-10-10S0 4.486 0 10c0 2.503.931 4.789 2.456 6.544L3.87 15.13A7.953 7.953 0 0 1 2 10c0-4.41 3.589-8 8-8z" />
      <path d="M22 18v2.586l-4.293-4.292a.999.999 0 0 0-1.414 0L12 20.586l-5.293-5.292-1.414 1.414 6 6a1 1 0 0 0 1.414 0L17 18.415 20.586 22H18v2h6v-6h-2zM11 6.051V5H9v1H7v8h2v1h2v-1.05c1.14-.233 2-1.243 2-2.45 0-.565-.195-1.081-.513-1.5.318-.418.513-.934.513-1.5 0-1.207-.86-2.217-2-2.449zM11 8.5a.5.5 0 0 1-.5.5H9V8h1.5a.5.5 0 0 1 .5.5zm-.5 3.5H9v-1h1.5a.5.5 0 0 1 0 1z" />
    </g>
  </svg>
);

export default SvgComponent;
