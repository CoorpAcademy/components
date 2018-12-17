import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 0c-1.594 0-3.07.837-4 2.08C8.07.837 6.594 0 5 0 2.243 0 0 2.243 0 5c0 5.491 8.124 10.632 8.471 10.848a.998.998 0 0 0 1.058 0C9.876 15.632 18 10.491 18 5c0-2.757-2.243-5-5-5zM18 14h2v6h-2z" />
      <circle cx={19} cy={22} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
