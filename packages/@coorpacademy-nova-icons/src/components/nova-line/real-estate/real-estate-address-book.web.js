import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M18 6h3v5h-3zM18 12h3v5h-3zM4 12h2v5h2v-3h2v3h2v-5h2L9 8z" />
      <path d="M15 4H3c-1.103 0-2 .896-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V6c0-1.104-.897-2-2-2zM3 22V6h12l.001 16H3z" />
    </g>
  </svg>
);

export default SvgComponent;
