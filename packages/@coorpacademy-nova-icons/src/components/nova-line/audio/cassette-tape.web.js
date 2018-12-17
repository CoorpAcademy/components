import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 7H4c-1.103 0-2 .896-2 2v9c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.104-.897-2-2-2zM9.869 18l.667-1h2.93l.667 1H9.869zm6.666 0l-2-3h-5.07l-2 3H4V9h16l.001 9h-3.466z" />
      <circle cx={7} cy={13} r={2} />
      <circle cx={17} cy={13} r={2} />
      <path d="M10 11h4v2h-4z" />
    </g>
  </svg>
);

export default SvgComponent;
