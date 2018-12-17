import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M18 18h3v2h-3zM19.708 15.706l-2 2-1.414-1.414 2-2zM18.294 23.707l-2-2 1.414-1.413 2 2zM2.293 20.293l5.5-5.5 1.414 1.414-5.5 5.5zM21 2h-7a1 1 0 0 0-.707 1.706l7 7A.998.998 0 0 0 22 10V3a1 1 0 0 0-1-1z" />
      <path d="M13 17v-.586l5.707-5.708-5.414-5.413-6 6a.998.998 0 0 0 0 1.413L11 16.414V17c0 1.654 1.346 3 3 3h2v-2h-2c-.55 0-1-.449-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
