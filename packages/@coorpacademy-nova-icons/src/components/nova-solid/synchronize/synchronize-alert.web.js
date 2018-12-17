import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M6.351 6.351A7.939 7.939 0 0 1 12 4c4.411 0 8 3.589 8 8h2c0-5.515-4.486-10-10-10a9.928 9.928 0 0 0-7.062 2.938L3 3v6h6L6.351 6.351zM17.649 17.649A7.937 7.937 0 0 1 12 20c-4.411 0-8-3.589-8-8H2c0 5.515 4.486 10 10 10a9.927 9.927 0 0 0 7.062-2.938L21 21v-6h-6l2.649 2.649z" />
      <path d="M11 7h2v6h-2z" />
      <circle cx={12} cy={16} r={1.25} />
    </g>
  </svg>
);

export default SvgComponent;
