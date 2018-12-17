import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 10V8h4v2h3V6H0v8c0 1.102.896 2 2 2h12v-4c0-1.099.9-2 2-2h-3zm-5 3H3v-2h5v2zm2-3H3V8h7v2zM20 2c0-1.102-.896-2-2-2H2C.896 0 0 .898 0 2v2h20V2zM21 17h-2a1 1 0 0 1 0-2h4v-2h-2v-1h-2v1c-1.654 0-3 1.347-3 3 0 1.654 1.346 3 3 3h2a1 1 0 0 1 0 2h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3 0-1.653-1.346-3-3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
