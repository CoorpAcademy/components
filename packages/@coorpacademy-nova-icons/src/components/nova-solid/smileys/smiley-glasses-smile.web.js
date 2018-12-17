import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M7 6h3a1 1 0 0 1 1 1h2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1h2.651C18.921 4.015 15.699 2 12 2S5.079 4.015 3.349 7H6a1 1 0 0 1 1-1zM21.541 9H18v1a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V9h-2v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9H2.46A9.98 9.98 0 0 0 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-1.045-.162-2.053-.459-3zM18 14c0 2.617-2.86 5-6 5s-6-2.383-6-5v-1h12v1z" />
      <path d="M14 7h3v3h-3zM7 7h3v3H7z" />
    </g>
  </svg>
);

export default SvgComponent;
