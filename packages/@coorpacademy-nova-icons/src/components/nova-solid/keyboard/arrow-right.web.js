import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M16.707 7.293l-1.414 1.414L17.586 11H2v2h15.586l-2.293 2.293 1.414 1.413L21.414 12z"
    />
  </svg>
);

export default SvgComponent;
