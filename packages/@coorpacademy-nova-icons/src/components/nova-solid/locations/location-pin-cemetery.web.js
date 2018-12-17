import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.002h24v24h-24z" />
    <path
      fill="currentColor"
      d="M18 3H6c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h2.875L12 23l3.125-5H18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 11v2H8v-2H6l5-3.333V9H9V7h2V5h2v2h2v2h-2v1.667L18 14h-2z"
    />
  </svg>
);

export default SvgComponent;
