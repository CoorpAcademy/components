import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M15 11.003h1.5a.5.5 0 0 0 0-1H15v1zM16.5 13.003H15v1h1.5a.5.5 0 0 0 0-1z" />
      <path d="M16 4.003a8.001 8.001 0 0 0-7.271 4.676A5.9 5.9 0 0 0 6 8.003c-3.309 0-6 2.692-6 6 0 3.309 2.691 6 6 6h10c4.411 0 8-3.589 8-8s-3.589-8-8-8zm3 9.5c0 1.207-.86 2.217-2 2.449v1.051h-2v-1h-2v-8h2v-1h2v1.051c1.14.232 2 1.243 2 2.449 0 .566-.195 1.082-.513 1.5.318.419.513.935.513 1.5z" />
    </g>
  </svg>
);

export default SvgComponent;
