import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v2h20V2zM20 6H0v8c0 1.102.896 2 2 2h16v-2c0-1.099.9-2 2-2V6zM8 13H3v-2h5v2zm2-3H3V8h7v2zm7 0h-4V8h4v2zM20 14h2v6h-2z" />
      <circle cx={21} cy={22} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
