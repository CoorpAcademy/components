import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 3H2C.897 3 0 3.897 0 5v13c0 1.103.897 2 2 2h9v2H7v2h10v-2h-4v-2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 2l-.002 10H2V5h20zM2 18v-1h19.997v1H2z" />
      <path d="M6 14h6.5c1.378 0 2.5-1.122 2.5-2.5S13.878 9 12.5 9h-1a.5.5 0 0 1 0-1H15V6h-3.5C10.122 6 9 7.122 9 8.5s1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H6c-.551 0-1-.449-1-1V9c0-.551.449-1 1-1h3V6H6C4.346 6 3 7.346 3 9v2c0 1.654 1.346 3 3 3zM17.5 11h1a.5.5 0 0 1 0 1H15v2h3.5c1.378 0 2.5-1.122 2.5-2.5S19.878 9 18.5 9h-1a.5.5 0 0 1 0-1H21V6h-3.5C16.122 6 15 7.122 15 8.5s1.122 2.5 2.5 2.5z" />
    </g>
  </svg>
);

export default SvgComponent;
