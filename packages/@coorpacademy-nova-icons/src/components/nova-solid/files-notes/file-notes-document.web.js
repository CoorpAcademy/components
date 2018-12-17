import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M18 2v3h-2V2h-3v3h-2V2H8v3H6V2H3v20h18V2h-3zM7 9h8v2H7V9zm10 10H7v-2h10v2zm0-4H7v-2h10v2z"
    />
  </svg>
);

export default SvgComponent;
