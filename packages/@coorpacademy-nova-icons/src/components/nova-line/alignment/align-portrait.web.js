import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M.293 7.294l1.414 1.414L4 6.415V22h2V6.415l2.293 2.293 1.414-1.414L5 2.586zM21 4h-8c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2V6c0-1.102-.897-2-2-2zm-.003 16H13V6h8l-.003 14z" />
      <circle cx={17} cy={11} r={2} />
      <path d="M17 13a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
