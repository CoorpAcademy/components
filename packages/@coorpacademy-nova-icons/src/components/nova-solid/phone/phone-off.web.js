import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8.531 11.641A7.51 7.51 0 0 1 8 9h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5c0 2.056.571 3.973 1.555 5.616l2.976-2.975zM20 14h-4a1 1 0 0 0-1 1v1c-1.511 0-2.869-.438-3.978-1.193l9.07-9.07-1.414-1.414-15.971 15.97 1.414 1.414 4.075-4.074A10.945 10.945 0 0 0 15 20h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
