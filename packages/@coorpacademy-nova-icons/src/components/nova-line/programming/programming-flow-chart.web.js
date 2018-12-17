import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20 2v2h-4V2H2v6h14V6h4v5h-4V9H2v6h14v-2h4v5h-4v-2H2v6h14v-2h5a1 1 0 0 0 1-1V2h-2zm-6 4H4V4h10v2zm0 7H4v-2h10v2zm0 7H4v-2h10v2z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
