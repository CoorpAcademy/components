import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.002h24v24.001h-24z" />
    <path
      fill="currentColor"
      d="M18 3H6c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h2.875L12 23l3.125-5H18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7.5 11.914l-4.207-4.208 1.414-1.413 2.793 2.793 5.793-5.793 1.414 1.413-7.207 7.208z"
    />
  </svg>
);

export default SvgComponent;
