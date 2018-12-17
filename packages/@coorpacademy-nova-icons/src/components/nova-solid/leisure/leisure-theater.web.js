import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M6.002 15h-4v7h8v-3a4 4 0 0 0-4-4zM2.001 13h2a7 7 0 0 0 7-7V2h-9v11zm5.001-8h2c0 2.588-2.448 3.843-2.553 3.894l-.895-1.788C5.563 7.102 7.002 6.343 7.002 5zM13 2v4c0 3.867 3.133 7 6.999 7h2V2H13zm4.552 6.894C17.448 8.843 15 7.588 15 5h2c0 1.343 1.438 2.102 1.453 2.108l-.901 1.786zM14 19v3h8v-7h-4a4 4 0 0 0-4 4z" />
    </g>
  </svg>
);

export default SvgComponent;
