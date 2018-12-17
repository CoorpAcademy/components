import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M21 4h-2.278c-.347-.596-.985-1-1.722-1H7c-.737 0-1.375.404-1.722 1H3a1 1 0 0 0-1 1v4c0 .266.105.52.293.707l3 3 .03-.03c.852 2.219 3.285 3.864 5.677 4.237V18H9a1 1 0 0 0-1 1v2H7v2h10v-2h-1v-2a1 1 0 0 0-1-1h-2v-1.086c2.392-.374 4.825-2.019 5.677-4.237l.03.03 3-3A.996.996 0 0 0 22 9V5a1 1 0 0 0-1-1zM4 6h1v3.586l-1-1V6zm10 15h-4v-1h4v1zm3-10c0 2.154-2.75 4-5 4s-5-1.846-5-4V5h10v6zm3-2.414l-1 1V6h1v2.586z" />
      <circle cx={12} cy={12} r={2} />
      <path d="M9 7a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1zM12 6a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1zM15 7a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
