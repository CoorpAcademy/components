import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13.293 13.707L16.586 17l-3.293 3.293 1.414 1.414L19.414 17l-4.707-4.707z" />
      <path d="M20 4H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6.586l-2.293 2.293 1.414 1.414L14.414 17l-4.707-4.707-1.414 1.414L10.586 16H4V6h16v4h2V6a2 2 0 0 0-2-2z" />
    </g>
  </svg>
);

export default SvgComponent;
