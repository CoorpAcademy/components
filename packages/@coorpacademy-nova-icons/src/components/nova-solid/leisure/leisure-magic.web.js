import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M16 2.07c-2.389-.796-3.51 5.38-3.866 7.93h4.226c.695-2.208 1.961-7.156-.36-7.93zM11.867 10C11.51 7.451 10.389 1.274 8 2.07c-2.32.774-1.054 5.722-.359 7.93h4.226zM7.001 21a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3h-10v3zM4.001 11v2h3v4H17v-4h3v-2z" />
    </g>
  </svg>
);

export default SvgComponent;
