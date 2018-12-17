import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 6h-6l-1.447-1.894A2 2 0 0 0 10.764 3H7a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" />
      <path d="M4 6H2v13c0 1.103.897 2 2 2h15v-2H4V6z" />
    </g>
  </svg>
);

export default SvgComponent;
