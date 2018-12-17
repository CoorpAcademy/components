import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 4H1a1 1 0 0 0-1 1v3h2V6h3v12H3v2h6v-2H7V6h3v2h2V5a1 1 0 0 0-1-1zM20 19.586V4.414l2.293 2.293 1.414-1.414L19 .586l-4.707 4.707 1.414 1.414L18 4.414v15.172l-2.293-2.293-1.414 1.413L19 23.414l4.707-4.708-1.414-1.413z" />
    </g>
  </svg>
);

export default SvgComponent;
