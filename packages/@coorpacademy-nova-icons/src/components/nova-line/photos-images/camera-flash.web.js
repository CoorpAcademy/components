import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 1.998H6c-1.103 0-2 .896-2 2v5c0 1.102.897 2 2 2h1.117l1 8H9v1c0 1.102.897 2 2 2h2c1.103 0 2-.898 2-2v-1h.883l1-8H18c1.103 0 2-.898 2-2v-5c0-1.104-.897-2-2-2zm-4.999 18H11v-1h2.001v1zm1.116-3H9.883l-.75-6h5.734l-.75 6zM6 8.998v-5h12l.001 5H6z" />
      <circle cx={12} cy={14.998} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
