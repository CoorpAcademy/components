import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20 3.003H3a2 2 0 00-2 2v14a2 2 0 002 2h17a2 2 0 002-2v-14a2 2 0 00-2-2zm-12 2h2v2H8v-2zm-3 14H3v-2h2v2zm0-12H3v-2h2v2zm5 12H8v-2h2v2zm5 0h-2v-2h2v2zm-6-4v-6l6 3-6 3zm6-8h-2v-2h2v2zm5 12h-2v-2h2v2zm0-12h-2v-2h2v2z"
    />
  </svg>
);

export default SvgComponent;
