import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M11 5h2v2h3V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3h3V5zM22.819 17.742L16 8H8l-6.819 9.742a.996.996 0 0 0-.181.573V21a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-2.685a.996.996 0 0 0-.181-.573zM9 10h6v2H9v-2zm-2 4h10v2H7v-2zm12 6H5v-2h14v2z" />
    </g>
  </svg>
);

export default SvgComponent;
