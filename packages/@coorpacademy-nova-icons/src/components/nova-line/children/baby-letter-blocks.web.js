import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.002H0z" />
    <g fill="currentColor">
      <path d="M9.998 12.998h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-1 7h-5v-5h5v5zM8.998 10.998h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1zm1-7h5v5h-5v-5zM20.998 12.998h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-1 7h-5v-5h5v5z" />
      <circle cx={12.498} cy={6.498} r={1.5} />
      <path d="M4.998 15.998h3v3h-3zM17.498 15.998l-1.5 3h3z" />
    </g>
  </svg>
);

export default SvgComponent;
