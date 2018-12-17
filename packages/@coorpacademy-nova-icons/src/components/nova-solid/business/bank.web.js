import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M1 20h22v2H1zM2 10h20a1.001 1.001 0 0 0 .515-1.857l-10-6a1 1 0 0 0-1.029 0l-10 6A1 1 0 0 0 2 10zM22 13v-2H2v2h1v4H2v2h20v-2h-1v-4h1zm-9 0h2v4h-2v-4zm-2 4H9v-4h2v4zm-6-4h2v4H5v-4zm14 4h-2v-4h2v4z" />
    </g>
  </svg>
);

export default SvgComponent;
