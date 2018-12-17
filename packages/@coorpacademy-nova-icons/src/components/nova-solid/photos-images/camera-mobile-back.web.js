import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M18 3H6a2 2 0 0 0-2 2v17h16V5a2 2 0 0 0-2-2zm-7 7a2 2 0 1 1 .001-4.001A2 2 0 0 1 11 10zm4-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
    />
  </svg>
);

export default SvgComponent;
