import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={8} cy={22} r={2} />
      <circle cx={16} cy={22} r={2} />
      <path d="M20 3.999c-.466 0-.869.321-.975.775L18.051 9h-4.638A7.998 7.998 0 0 1 6 14c-.357 0-.705-.031-1.05-.077l1.079 4.319c.112.446.512.758.971.758h10c.466 0 .869-.321.975-.775l2.82-12.226H24v-2h-4z" />
      <path d="M12 6c0-3.309-2.691-6-6-6S0 2.691 0 6h2c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4c-1.078 0-2.065-.44-2.812-1.189L5 7H0v5l1.761-1.761A5.94 5.94 0 0 0 6 12c3.309 0 6-2.691 6-6z" />
    </g>
  </svg>
);

export default SvgComponent;
