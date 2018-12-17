import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14 5c0-2.757-2.243-5-5-5a5.006 5.006 0 0 0-4.072 2.113A3.877 3.877 0 0 0 4 2C1.795 2 0 3.795 0 6s1.795 4 4 4h5c2.757 0 5-2.243 5-5zM9 8H4a2 2 0 0 1 0-4c.305 0 .611.078.909.232a.997.997 0 0 0 1.368-.473A3.006 3.006 0 0 1 9 2c1.654 0 3 1.346 3 3s-1.346 3-3 3zM19 22h-4v-4l-2 2v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3l-2-2v4z" />
      <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L17 14.414l5.293 5.293 1.414-1.414-6-6zM9 16l-4-4-4 4h3v5a1 1 0 0 0 1 1h4v-2H6v-4h3z" />
    </g>
  </svg>
);

export default SvgComponent;
