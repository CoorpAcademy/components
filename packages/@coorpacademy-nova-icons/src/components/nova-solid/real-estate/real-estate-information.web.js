import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M11 15h2v4h-2z" />
      <circle cx={12} cy={13} r={1} />
      <path d="M21.707 12.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14h1v9h16v-9h1a.999.999 0 0 0 .707-1.707zM12 21c-2.762 0-5-2.238-5-5s2.238-5 5-5 5 2.238 5 5-2.238 5-5 5z" />
    </g>
  </svg>
);

export default SvgComponent;
