import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M3 12.002c0 5.524 4.477 10 10 10v-20c-5.523 0-10 4.476-10 10z"
    />
  </svg>
);

export default SvgComponent;
