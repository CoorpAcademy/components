import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M8 4.5a1.5 1.5 0 0 0-3 0V5h3v-.5zM8 15V6H5v9l1.5 3z" />
      <path d="M21 7H10v2h5v10H3V7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 8h-4v-2h4v2z" />
    </g>
  </svg>
);

export default SvgComponent;
