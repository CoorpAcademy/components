import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.998 16.001a9 9 0 0 1-9-9c0-.201.017-.398.03-.595-4.069 1.142-7.03 4.562-7.03 8.595 0 1.735.541 3.392 1.573 4.836l-2.573 4.164h11c5.494 0 9.963-4.008 9.997-8.945a8.954 8.954 0 0 1-3.997.945z" />
      <path d="M17.705.294a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414 1.293-1.293v4.586a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.415l1.293 1.293 1.414-1.414-6-6zm.293 9.707h-2v-3h2v3z" />
    </g>
  </svg>
);

export default SvgComponent;
