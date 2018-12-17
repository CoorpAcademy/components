import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M19.707 5.707l-1.414-1.414L6 16.586V13H4v7h7v-2H7.414z"
    />
  </svg>
);

export default SvgComponent;
