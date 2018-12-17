import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17 1.999H7c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-16c0-1.103-.897-2-2-2zm-10 18v-16h10l.001 16H7z" />
      <path d="M12 12.999c-1.841 0-3 1.16-3 3h6c0-1.84-1.159-3-3-3z" />
      <circle cx={12} cy={9.999} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
