import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 10.263V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8.262A7.998 7.998 0 0 1 10 18c0-3.726 2.552-6.848 6-7.737zM8 6H6v2h2v2H6v2H4v-2h2V8H4V6h2V4H4V2h2v2h2v2z" />
      <path d="M18 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4c-1.078 0-2.065-.44-2.811-1.188L17 19h-5v5l1.761-1.761A5.94 5.94 0 0 0 18 24c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
    </g>
  </svg>
);

export default SvgComponent;
