import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v2.002h20V2zM3 3a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM20 11V5.002H0V16c0 1.103.896 2 2 2h9v-5c0-1.1.9-2 2-2h7zM19 19h5v5h-5zM13 19h5v5h-5z" />
      <path d="M16 13h5v5h-5z" />
    </g>
  </svg>
);

export default SvgComponent;
