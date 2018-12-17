import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 16.006c2.205 0 4-1.795 4-4s-1.795-4-4-4c-2.206 0-4 1.795-4 4a4.005 4.005 0 0 0 4 4zM8 17.006c-4.711 0-8 2.467-8 6v1h16v-1c0-3.533-3.29-6-8-6zM18-.01c-3.309 0-6 2.692-6 6s2.691 6 6 6 6-2.692 6-6c0-3.307-2.691-6-6-6zm3 7h-4v-5h2v3h2v2z" />
    </g>
  </svg>
);

export default SvgComponent;
