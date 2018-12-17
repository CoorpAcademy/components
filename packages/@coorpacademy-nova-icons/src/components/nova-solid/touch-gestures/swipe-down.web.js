import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10.5 9.067H2v7h8.5a3.5 3.5 0 1 0 0-7zm0 5H9v-3h1.5a1.5 1.5 0 1 1 0 3z" />
      <path d="M19 12.567c0-3.321-1.035-6.488-2.994-9.157l-1.612 1.182A13.396 13.396 0 0 1 17 12.567c0 2.111-.496 4.19-1.438 6.062L14 17.067v5h5l-1.962-1.961A15.5 15.5 0 0 0 19 12.567z" />
    </g>
  </svg>
);

export default SvgComponent;
