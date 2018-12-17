import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M18 13v3.586L5.707 4.293 4.293 5.707 16.586 18H13v2h7v-7z"
    />
  </svg>
);

export default SvgComponent;
