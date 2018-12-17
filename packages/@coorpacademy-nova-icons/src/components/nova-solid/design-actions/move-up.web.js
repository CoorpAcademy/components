import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22.707 8.293L18 3.586l-4.707 4.707 1.414 1.414L17 7.414V13h2V7.414l2.293 2.293zM17 14h2v2h-2zM17 17h2v2h-2zM2 13h9v9H2zM2 11h9V2H2v9zm2-7h5v5H4V4z" />
    </g>
  </svg>
);

export default SvgComponent;
