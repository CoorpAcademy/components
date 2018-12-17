import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 .001H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3v-20zM6 20.001h4.262a8.045 8.045 0 0 1-.262-2 8 8 0 0 1 8-8v-9a1 1 0 0 0-1-1H6v20z" />
      <path d="M18 12.001c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 2c.739 0 1.425.216 2.02.566l-5.453 5.453A3.957 3.957 0 0 1 14 18.001c0-2.206 1.794-4 4-4zm0 8a3.959 3.959 0 0 1-2.019-.566l5.452-5.452c.352.594.567 1.279.567 2.018 0 2.206-1.794 4-4 4z" />
    </g>
  </svg>
);

export default SvgComponent;
