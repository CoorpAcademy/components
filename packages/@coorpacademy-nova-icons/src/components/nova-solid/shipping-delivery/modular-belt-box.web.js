import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M2 18h2v2H2v2h20v-2h-2v-2h2v-2H2v2zm8 0h4v2h-4v-2zM10 7H7v3H5V7H2v8h8zM18 4v5h-3V4h-4v11h11V4z" />
    </g>
  </svg>
);

export default SvgComponent;
