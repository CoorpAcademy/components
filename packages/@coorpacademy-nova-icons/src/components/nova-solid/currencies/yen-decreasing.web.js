import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 14.003v-3H6v-2h1.882L6.106 5.451l1.789-.895L9 6.768l1.106-2.212 1.789.895-1.776 3.552H12v2h-2v3H8l3.612 3.612a8.831 8.831 0 0 0 1.285-.509L17 13.003l.036.037A8.963 8.963 0 0 0 18 9.003c0-4.971-4.029-9-9-9s-9 4.029-9 9a8.976 8.976 0 0 0 2.636 6.365L6 12.003l2 2z" />
      <path d="M22 18.003v2.586l-4.293-4.292a.999.999 0 0 0-1.414 0L12 20.589l-5.293-5.292-1.414 1.413 6 6a.999.999 0 0 0 1.414 0L17 18.417l3.586 3.586H18v2h6v-6h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
