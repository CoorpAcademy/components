import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <circle cx={16} cy={20} r={2} />
      <circle cx={7} cy={20} r={2} />
      <path d="M21.364 6.878l-4.243-4.242-4.471 2.235 6.478 6.479zM17.958 13.008l-6.965-6.966c-1.447 1.958-1.302 4.721.472 6.493 1.772 1.774 4.536 1.919 6.493.473z" />
      <path d="M20 15H8v-5a1 1 0 0 0-1-1H5c-2.206 0-4 1.795-4 4v6a1 1 0 0 0 1 1h2a3.001 3.001 0 0 1 6 0h3a3.001 3.001 0 0 1 6 0h1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM6 14H3v-1a2 2 0 0 1 2-2h1v3z" />
    </g>
  </svg>
);

export default SvgComponent;
