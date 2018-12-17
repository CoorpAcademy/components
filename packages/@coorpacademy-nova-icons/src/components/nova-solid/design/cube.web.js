import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="#767676"
      d="M8 3L2 9v13h13l6-6V3H8zm5 17H4v-9h9v9zm0-11H5l4-4h8l-4 4z"
    />
  </svg>
);

export default SvgComponent;
