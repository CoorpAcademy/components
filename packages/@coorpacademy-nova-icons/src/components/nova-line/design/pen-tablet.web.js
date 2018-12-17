import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M8 4.5a1.501 1.501 0 0 0-3 0V5h3v-.5zM8 15V6H5v9l1.5 3z" />
      <path d="M21 7H10v2h5v10H3V7c-1.103 0-2 .898-2 2v10c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V9c0-1.102-.897-2-2-2zm-4 2h4v4h-4V9zm0 10v-4h4.001v4H17z" />
    </g>
  </svg>
);

export default SvgComponent;
