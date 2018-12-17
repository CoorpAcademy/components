import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M22 4V2H2v2h1v13a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1V4h1zm-2 16H4v-1h16v1zm-1-3H5V4h14v13z" />
      <path d="M6 5h5v2H6z" />
      <circle cx={14} cy={6} r={1} />
      <circle cx={17} cy={6} r={1} />
      <path d="M7 16h10a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h8v4H8v-4z" />
    </g>
  </svg>
);

export default SvgComponent;
