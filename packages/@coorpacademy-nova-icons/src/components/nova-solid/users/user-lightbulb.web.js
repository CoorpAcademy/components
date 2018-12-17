import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M16.001 0h2v2h-2zM21.697 2.135l1 1.732-1.733 1-1-1.733zM12.305 2.134l1.733 1-1 1.732-1.732-1z"
    />
    <g fill="currentColor">
      <circle cx={7.001} cy={5} r={3} />
      <path d="M7.001 8c-2.757 0-5 2.243-5 5v3a1 1 0 0 0 1 1h1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h1a1 1 0 0 0 1-1v-3c0-2.757-2.243-5-5-5z" />
    </g>
    <path
      fill="currentColor"
      d="M20.501 6.5c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5c0 1.186.596 2.231 1.5 2.864V11h4V9.364a3.493 3.493 0 0 0 1.5-2.864zM16.001 12h2v2h-2z"
    />
  </svg>
);

export default SvgComponent;
