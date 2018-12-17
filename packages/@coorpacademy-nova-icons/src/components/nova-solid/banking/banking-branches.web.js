import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M19 9h-2V6h1a1 1 0 0 0 .555-1.832l-6-4a1.003 1.003 0 0 0-1.109 0l-6 4A.999.999 0 0 0 6 5.999h1v3H5v2h14V9zm-4 0h-2V6h2v3zM9 5.999h2v3H9v-3zM6 15h5v3h2v-3h5v3h2v-4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4h2v-3z" />
      <circle cx={5} cy={22} r={2} />
      <circle cx={12} cy={22} r={2} />
      <circle cx={19} cy={22} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
