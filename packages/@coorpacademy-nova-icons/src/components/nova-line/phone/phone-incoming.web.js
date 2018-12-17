import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 10h-4.586l6.293-6.293-1.414-1.414L14 8.586V4h-2v8h8z" />
      <path d="M18 15h-4a2.002 2.002 0 0 0-1.999 1.922c-2.542-.404-4.473-2.34-4.909-4.924A2.003 2.003 0 0 0 9 10V6c0-1.104-.897-2-2-2H3c-1.103 0-2 .896-2 2v5c0 6.617 5.383 12 12 12h5c1.103 0 2-.896 2-2v-4a2 2 0 0 0-2-2zm-5 6C7.486 21 3 16.514 3 11V6h4v4H6a.997.997 0 0 0-1 1.016C5.073 15.567 8.512 19 13 19a1 1 0 0 0 1-1v-1h4l.001 4H13z" />
    </g>
  </svg>
);

export default SvgComponent;
