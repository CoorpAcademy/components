import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <path
      fill="currentColor"
      d="M18 3H6c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h2.875L12 23l3.125-5H18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.5 5a3.755 3.755 0 0 1-3 3.674V16H9v-4.326A3.755 3.755 0 0 1 6 8V6h1.5v2c0 .976.629 1.801 1.5 2.112V6h1.5v4.112A2.248 2.248 0 0 0 12 8V6h1.5v2zm4.5 4h-1.5v4H15V6a3 3 0 0 1 3 3v3z"
    />
  </svg>
);

export default SvgComponent;
