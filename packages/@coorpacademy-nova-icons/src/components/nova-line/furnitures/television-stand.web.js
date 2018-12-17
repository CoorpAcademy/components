import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24.001v24.001H0z" />
    <g fill="currentColor">
      <path d="M21 12h-8v-1h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5v1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3c.266 0 .52-.105.707-.293L8.414 20h7.172l1.707 1.707A.996.996 0 0 0 18 22h3a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zM7 4h10v5H7V4zm13 16h-1.586l-1.707-1.707A1 1 0 0 0 16 18H8a1 1 0 0 0-.707.293L5.586 20H4v-6h16v6z" />
      <circle cx={7} cy={16} r={1} />
      <circle cx={17} cy={16} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
