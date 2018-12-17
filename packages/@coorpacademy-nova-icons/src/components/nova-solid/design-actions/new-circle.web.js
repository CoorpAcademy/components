import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M19 13c1.029 0 1.997.261 2.843.717.097-.56.157-1.131.157-1.717 0-5.523-4.478-10-10-10S2 6.477 2 12s4.477 10 10 10c.586 0 1.157-.06 1.716-.157A6 6 0 0 1 19 13z" />
      <path d="M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
    </g>
  </svg>
);

export default SvgComponent;
