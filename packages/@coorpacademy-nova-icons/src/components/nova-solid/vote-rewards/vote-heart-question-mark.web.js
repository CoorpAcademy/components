import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 0c-1.594 0-3.07.837-4 2.08C8.07.837 6.594 0 5 0 2.243 0 0 2.243 0 5c0 5.491 8.124 10.632 8.471 10.848a.998.998 0 0 0 1.058 0C9.876 15.632 18 10.491 18 5c0-2.757-2.243-5-5-5zM20 12c-2.206 0-4 1.794-4 4h2c0-1.102.897-2 2-2s2 .898 2 2-.897 2-2 2h-1v3h2v-1.127A4.005 4.005 0 0 0 24 16c0-2.206-1.794-4-4-4z" />
      <circle cx={20} cy={23} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
