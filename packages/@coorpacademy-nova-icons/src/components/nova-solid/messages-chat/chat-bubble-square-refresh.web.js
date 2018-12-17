import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9.057 7H1.998c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h1v4l5.333-4h6.667c1.103 0 2-.897 2-2v-3.059A9 9 0 0 1 9.057 7z" />
      <path d="M17.999 10c-1.077 0-2.064-.44-2.811-1.189L16.999 7h-5v5l1.764-1.764A6.026 6.026 0 0 0 17.999 12c3.309 0 6-2.691 6-6h-2c0 2.206-1.794 4-4 4zM22.238 1.761A5.937 5.937 0 0 0 17.999 0c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4 1.078 0 2.066.44 2.811 1.188L18.999 5h5V0l-1.761 1.761z" />
    </g>
  </svg>
);

export default SvgComponent;
