import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 3H2C.897 3 0 3.898 0 5v11h24V5c0-1.102-.897-2-2-2zm-3 11H5V6h2v6h1V9h3v3h1V7h3v5h1V8h3v6zM0 18c0 1.103.897 2 2 2h9v2H7.001v2h10v-2h-4v-2h9c1.103 0 2-.897 2-2v-1H0v1z" />
    </g>
  </svg>
);

export default SvgComponent;
