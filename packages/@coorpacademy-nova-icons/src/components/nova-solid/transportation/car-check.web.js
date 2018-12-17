import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 14l1 2H5l2-4h5v-2H6l-4 7v5h2a2 2 0 0 0 4 0h8a2 2 0 0 0 4 0h2v-5l-1.714-3H18zm-9 6H4v-2h5v2zm11 0h-5v-2h5v2zM22.53 6.53l-1.06-1.06L17 9.94l-2.47-2.47-1.06 1.06L17 12.061z" />
    </g>
  </svg>
);

export default SvgComponent;
