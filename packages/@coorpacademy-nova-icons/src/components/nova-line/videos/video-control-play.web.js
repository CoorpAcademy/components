import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M5 3.259v17.482L19.985 12 5 3.259zm2 3.482L16.015 12 7 17.259V6.741z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
