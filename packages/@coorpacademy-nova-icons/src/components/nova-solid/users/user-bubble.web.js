import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18.001 1c-3.309 0-6 2.691-6 6a5.94 5.94 0 0 0 1.203 3.602L14.802 9.4a3.96 3.96 0 0 1-.801-2.4c0-2.205 1.794-4 4-4 2.205 0 4 1.795 4 4 0 2.206-1.795 4-4 4v2c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
      <circle cx={13.001} cy={15} r={1} />
      <circle cx={15.501} cy={12.5} r={1.5} />
      <path d="M8.001 16c2.205 0 4-1.794 4-4 0-2.205-1.795-4-4-4-2.206 0-4 1.795-4 4 0 2.206 1.794 4 4 4zM8.001 17c-4.711 0-8 2.467-8 6v1h16v-1c0-3.533-3.29-6-8-6z" />
    </g>
  </svg>
);

export default SvgComponent;
