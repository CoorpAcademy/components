import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="#767676"
      d="M15 2h-5L4 5v2h6v16h5v-3h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2V7h6V5z"
    />
  </svg>
);

export default SvgComponent;
