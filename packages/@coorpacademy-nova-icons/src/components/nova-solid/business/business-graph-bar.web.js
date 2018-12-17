import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2V6c0-1.103-.896-2-2-2zm-.003 14H4V6h16l-.003 12z" />
      <path d="M19 7H5v10h14V7zM9 16H7v-4h2v4zm4 0h-2v-6h2v6zm4 0h-2v-5h2v5z" />
    </g>
  </svg>
);

export default SvgComponent;
