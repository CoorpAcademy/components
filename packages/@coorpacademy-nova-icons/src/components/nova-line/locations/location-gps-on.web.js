import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <circle cx={12} cy={12} r={3} />
      <path d="M22 11h-2.069A8.008 8.008 0 0 0 13 4.069V2h-2v2.069A8.01 8.01 0 0 0 4.069 11H2v2h2.069A8.007 8.007 0 0 0 11 19.931V22h2v-2.069A8.008 8.008 0 0 0 19.931 13H22v-2zm-10 7c-3.309 0-6-2.692-6-6s2.691-6 6-6 6 2.692 6 6-2.691 6-6 6z" />
    </g>
  </svg>
);

export default SvgComponent;
