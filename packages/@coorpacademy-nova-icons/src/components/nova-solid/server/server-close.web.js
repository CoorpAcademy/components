import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .003h24v24H0z" />
    <g fill="currentColor">
      <path d="M0 13h20V7H0v6zm16-4a1 1 0 1 1 0 2 1 1 0 1 1 0-2zm-3 0a1 1 0 1 1 0 2 1 1 0 1 1 0-2zM8 9v2H3V9h5zM20 6V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v4h20zm-4-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM3 2h5v2H3V2zM20 14H0v4c0 1.103.896 2 2 2h12a6 6 0 0 1 6-6zM8 18H3v-2h5v2zm5 0a1 1 0 1 1-.002-1.998A1 1 0 0 1 13 18z" />
      <path d="M23.707 17.707l-1.414-1.414L20 18.586l-2.293-2.293-1.414 1.414L18.586 20l-2.293 2.293 1.414 1.414L20 21.414l2.293 2.293 1.414-1.414L21.414 20z" />
    </g>
  </svg>
);

export default SvgComponent;
