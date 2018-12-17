import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8.002 8.006c-2.205 0-4 1.795-4 4s1.795 4 4 4 4-1.795 4-4-1.794-4-4-4zM8.002 17.006c-4.711 0-8 2.467-8 6v1h16v-1c0-3.533-3.289-6-8-6zM24.004 7.006v-2h-1.102a4.985 4.985 0 0 0-.732-1.754l.783-.784-1.413-1.414-.784.784a4.95 4.95 0 0 0-1.751-.731V.006h-2v1.101a4.948 4.948 0 0 0-1.754.732l-.783-.783-1.415 1.414.783.783a4.96 4.96 0 0 0-.731 1.753h-1.103v2h1.103c.13.638.384 1.228.732 1.754l-.784.784 1.416 1.413.782-.784a4.961 4.961 0 0 0 1.753.732v1.101h2v-1.102a4.985 4.985 0 0 0 1.754-.732l.783.783 1.414-1.415-.784-.782a4.973 4.973 0 0 0 .731-1.752h1.102zm-6.002 1a2 2 0 1 1 .001-4.001 2 2 0 0 1-.001 4.001z" />
    </g>
  </svg>
);

export default SvgComponent;
