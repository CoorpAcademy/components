import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 10h4v4H4zM10 10.111V14h3.889A9.022 9.022 0 0 1 10 10.111zM4 16h4v4H4zM10 16h4v4h-4z" />
      <path d="M16 22H2V8h7.231A9.03 9.03 0 0 1 9 6H0v18h18v-9a9.03 9.03 0 0 1-2-.231V22z" />
      <path d="M18.001 10c-1.077 0-2.064-.44-2.811-1.189L17.001 7h-5v5l1.764-1.763A6.03 6.03 0 0 0 18.001 12c3.309 0 6-2.69 6-6h-2c0 2.206-1.794 4-4 4zM22.24 1.761A5.937 5.937 0 0 0 18.001 0c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4 1.078 0 2.065.44 2.812 1.188L19.001 5h5V0L22.24 1.761z" />
    </g>
  </svg>
);

export default SvgComponent;
