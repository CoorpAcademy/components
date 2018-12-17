import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 0H4C2.897 0 2 .897 2 2v14h2V6h17.999l-.002 12H14v2h8c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2zM12 2v2H9V2h3zM4 2h3v2H4V2zm10 2V2h8v2h-8z" />
      <path d="M11 18H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-1 4H2v-2h8v2zM11.707 16.708l4.5-4.5L18 14V9h-5l1.793 1.794-4.5 4.5z" />
    </g>
  </svg>
);

export default SvgComponent;
