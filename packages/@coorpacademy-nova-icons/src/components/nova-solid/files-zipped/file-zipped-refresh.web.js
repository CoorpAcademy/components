import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 10.263V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8.262A7.998 7.998 0 0 1 10 18c0-3.726 2.552-6.848 6-7.737zM8 6H6v2h2v2H6v2H4v-2h2V8H4V6h2V4H4V2h2v2h2v2zM18.001 22c-1.077 0-2.064-.44-2.811-1.19L17.001 19h-5v5l1.764-1.764A6.026 6.026 0 0 0 18.001 24c3.309 0 6-2.691 6-6h-2c0 2.206-1.794 4-4 4z" />
      <path d="M22.24 13.761A5.937 5.937 0 0 0 18.001 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4 1.078 0 2.065.44 2.812 1.189L19.001 17h5v-5l-1.761 1.761z" />
    </g>
  </svg>
);

export default SvgComponent;
