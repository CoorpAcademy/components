import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M19 14.001h4a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1zM1.232 14.642c.19.228.471.359.768.359h6v4a1 1 0 0 0 1 1h3c.4 0 .762-.238.919-.606L16 13.001V3.523l-3.629-1.451A.999.999 0 0 0 12 2.001H4a1 1 0 0 0-.984.821l-2 11c-.053.292.027.592.216.82z" />
    </g>
  </svg>
);

export default SvgComponent;
