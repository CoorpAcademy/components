import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M9 14h3v3H9zM14 14h3v3h-3zM12 10h2V7.496l7.206-1.517-.412-1.958L14 5.452V3h-2v2.873L1.794 8.021l.412 1.958L12 7.916z" />
      <path d="M19 11H7a1 1 0 0 0-1 1v8c0 1.104.897 2 2 2h10c1.103 0 2-.896 2-2v-8a1 1 0 0 0-1-1zM8 20v-7h10l.001 7H8z" />
    </g>
  </svg>
);

export default SvgComponent;
