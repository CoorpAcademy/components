import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 20c0-3.533-3.29-6-8-6s-8 2.467-8 6v4h16v-4zm-3 0h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2zM4.999 9v2h3c.912 1.226 2.359 2 4 2s3.088-.774 4-2h3V9c.001-10-14-10-14 0zM12 11a2.997 2.997 0 0 1-2.796-1.938c.046-.029.097-.051.142-.081C10.652 8.102 11.712 6.708 12 5c.285 1.697 1.339 3.096 2.653 3.981.045.03.097.053.143.082A2.997 2.997 0 0 1 12 11z" />
    </g>
  </svg>
);

export default SvgComponent;
