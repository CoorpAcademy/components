import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 3h10v4h4v1h2V5.586L16.414 1H5c-1.103 0-2 .896-2 2v5h2V3zM19 21H5v-1H3v1c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2v-1h-2v1zM8 15.5C8 14.122 6.878 13 5.5 13h-1a.5.5 0 0 1 0-1H8v-2H4.5A2.503 2.503 0 0 0 2 12.5C2 13.879 3.122 15 4.5 15h1a.5.5 0 0 1 0 1H2v2h3.5C6.878 18 8 16.879 8 15.5zM19 16v-6h-2v8h5v-2zM15 13c0-1.654-1.346-3-3-3s-3 1.346-3 3v2c0 1.654 1.346 3 3 3a2.95 2.95 0 0 0 1.285-.301l1.008 1.008 1.414-1.415-1.008-1.008A2.94 2.94 0 0 0 15 15v-2zm-2 2a1.001 1.001 0 0 1-2 0v-2c0-.551.449-1 1-1s1 .449 1 1v2z" />
    </g>
  </svg>
);

export default SvgComponent;
