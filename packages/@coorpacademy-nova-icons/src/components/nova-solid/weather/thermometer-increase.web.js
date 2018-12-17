import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 5.002a3 3 0 1 0-6 0v9.168a4.472 4.472 0 0 0-1.5 3.332 4.5 4.5 0 0 0 9 0A4.472 4.472 0 0 0 10 14.17V5.002zm-3 15a2.5 2.5 0 0 1-1-4.789V9.002h2v6.211a2.5 2.5 0 0 1-1 4.789zM21.707 7.295L17 2.588l-4.707 4.707 1.414 1.414L16 6.416v6.586h2V6.416l2.293 2.293zM16 14.002h2v2h-2zM16 17.002h2v2h-2zM16 20.002h2v2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
