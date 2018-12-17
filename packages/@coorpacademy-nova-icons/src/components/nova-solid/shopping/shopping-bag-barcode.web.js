import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 2c1.654 0 3 1.346 3 3h2c0-2.757-2.243-5-5-5S4 2.243 4 5h2c0-1.654 1.346-3 3-3zM17.571 14L17 6H1L0 20h8v-4c0-1.1.9-2 2-2h7.571z" />
      <path d="M10 16h2v8h-2zM13 16h2v5h-2zM13 22h2v2h-2zM16 16h2v8h-2zM19 16h2v5h-2zM22 16h2v8h-2zM19 22h2v2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
