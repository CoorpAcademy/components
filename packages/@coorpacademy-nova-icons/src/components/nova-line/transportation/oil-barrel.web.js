import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <path
      d="M20 10V8h-1V5a1 1 0 0 0-1-1h-8V2H7v2H6a1 1 0 0 0-1 1v3H4v2h1v5H4v2h1v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4h1v-2h-1v-5h1zM7 6h10v2H7V6zm10 14H7v-3h10v3zm0-5H7v-5h10v5z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
