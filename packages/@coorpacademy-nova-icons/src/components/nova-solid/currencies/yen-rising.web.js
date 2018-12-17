import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14 13.003l1.84 1.84A8.981 8.981 0 0 0 17 13.114v-2.111h.77a9.03 9.03 0 0 0 .23-2c0-4.971-4.029-9-9-9s-9 4.029-9 9 4.029 9 9 9l5-5zm-8-2v-2h1.882L6.106 5.451l1.789-.895L9 6.768l1.106-2.212 1.789.895-1.776 3.552H12v2h-2v3H8v-3H6z" />
      <path d="M18 13.003v2h2.586L17 18.589l-2.293-2.292a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L14 18.417l2.293 2.293a.999.999 0 0 0 1.414 0L22 16.417v2.586h2v-6h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
