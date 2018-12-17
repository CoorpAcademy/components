import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24h-24z" />
    <g fill="currentColor">
      <path d="M13.499.998a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0-3 0c0 1.5 3 4.5 3 4.5s3-3 3-4.5a1.5 1.5 0 0 0-1.5-1.5z" />
      <circle cx={18.999} cy={7.498} r={2.5} />
      <path d="M18.999 10.998c-2.393 0-4 2.011-4 5v2a1 1 0 0 0 1 1h1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h1a1 1 0 0 0 1-1v-2c0-2.99-1.607-5-4-5z" />
      <circle cx={4.999} cy={7.498} r={2.5} />
      <path d="M8.174 16.531c-1.226-5.01-1.355-5.534-3.196-5.534-1.799 0-1.928.525-3.154 5.54-.219.895-.479 1.957-.795 3.219a1.003 1.003 0 0 0 .949 1.242s.744.016 1.332.018c.191.574.478 1.465.736 2.283a1 1 0 0 0 1.906 0c.258-.818.545-1.709.737-2.283.587-.002 1.331-.018 1.331-.018a.997.997 0 0 0 .949-1.242c-.316-1.265-.576-2.329-.795-3.225z" />
    </g>
  </svg>
);

export default SvgComponent;
