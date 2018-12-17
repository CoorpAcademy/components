import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 15.001H2v-5h1v-2H2a2 2 0 0 0-2 2v9c0 1.102.896 2 2 2h6v1H5v2h8v-2h-3v-1h6c1.104 0 2-.898 2-2v-5h-2v1zm-14 4v-2h14v2H2zM23 .001H13a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h4v1h-3v2h8v-2h-3v-1h4a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-1 2v4h-8v-4h8z" />
      <path d="M9 5.001h2v-2H8a1 1 0 0 0-1 1v3H4l4 4 4-4H9v-2z" />
    </g>
  </svg>
);

export default SvgComponent;
