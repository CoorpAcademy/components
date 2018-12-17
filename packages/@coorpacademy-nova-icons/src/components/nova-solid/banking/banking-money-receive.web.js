import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M23.707 2.707l-1.414-1.413L19 4.586V2h-2v5.999h6v-2h-2.586zM17 12h-1v-1a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v10c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2v-1h1a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6h-4.586l-2-2 2-2H16v4z" />
      <circle cx={12} cy={16} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
