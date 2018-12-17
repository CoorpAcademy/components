import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M22 4H2a1 1 0 0 0-1 1v15h2V10h10v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 2v4h-6V6h6zM3 8V6h10v2H3zm12 10v-6h6v6h-6z" />
      <circle cx={17} cy={8} r={1} />
      <circle cx={17} cy={14} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
