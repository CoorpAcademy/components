import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M19 12v3.586l-7-7-4 4-5.293-5.293-1.414 1.414L8 15.414l4-4L17.586 17H14v2h7v-7z"
    />
  </svg>
);

export default SvgComponent;
