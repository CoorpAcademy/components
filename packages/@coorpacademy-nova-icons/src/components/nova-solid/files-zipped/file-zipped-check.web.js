import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 14.81V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h11a5.99 5.99 0 0 1 3-5.19zM8 6H6v2h2v2H6v2H4v-2h2V8H4V6h2V4H4V2h2v2h2v2zM22.293 16.293L18 20.586l-2.293-2.293-1.414 1.413L18 23.414l5.707-5.708z" />
    </g>
  </svg>
);

export default SvgComponent;
