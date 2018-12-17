import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={8} cy={13} r={2} />
      <path d="M17.707 6.707L21 3.414V6h2V0h-6v2h2.586l-3.293 3.294zM16 11V8a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10v-2H7.414L2 11.586V9h6.586l2 2H16z" />
      <path d="M18 12c-3.309 0-6 2.692-6 6 0 3.309 2.691 6 6 6s6-2.691 6-6c0-3.308-2.691-6-6-6zm0 10c-2.205 0-4-1.794-4-4s1.795-4 4-4 4 1.794 4 4-1.795 4-4 4z" />
      <path d="M19 15h-2v4h3v-2h-1z" />
    </g>
  </svg>
);

export default SvgComponent;
