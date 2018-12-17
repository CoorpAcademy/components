import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 5.002a3 3 0 1 0-6 0v9.168a4.472 4.472 0 0 0-1.5 3.332 4.5 4.5 0 0 0 9 0A4.472 4.472 0 0 0 10 14.17V5.002zm-3 15a2.5 2.5 0 0 1-1-4.789V9.002h2v6.211a2.5 2.5 0 0 1-1 4.789zM20.293 15.295L18 17.588v-6.586h-2v6.586l-2.293-2.293-1.414 1.414L17 21.416l4.707-4.707zM16 8.002h2v2h-2zM16 5.002h2v2h-2zM16 2.002h2v2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
