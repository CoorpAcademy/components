import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14 13.003l1.84 1.84A8.981 8.981 0 0 0 17 13.114v-2.111h.77a9.03 9.03 0 0 0 .23-2c0-4.971-4.029-9-9-9s-9 4.029-9 9 4.029 9 9 9l5-5zm-9-1h1v-2H5v-2h1v-1c0-1.654 1.346-3 3-3s3 1.346 3 3h-2c0-.551-.449-1-1-1s-1 .449-1 1v1h2v2H8v2h4v2H5v-2z" />
      <path d="M18 13.003v2h2.586L17 18.589l-2.293-2.292a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L14 18.417l2.293 2.293a.999.999 0 0 0 1.414 0L22 16.417v2.586h2v-6h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
