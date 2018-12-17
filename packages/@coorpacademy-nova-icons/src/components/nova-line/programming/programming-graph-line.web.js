import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 3H2C.897 3 0 3.897 0 5v13c0 1.103.897 2 2 2h9v2H7v2h10v-2h-4v-2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 2l-.002 10H2V5h20zM2 18v-1h19.997v1H2z" />
      <path d="M9 12.414l4-4V5.586l-4 4-2-2-3 3v2.828l3-3zM16.333 13.333h1.333v-.701A1.668 1.668 0 0 0 19 11a1.67 1.67 0 0 0-1.667-1.667h-.667a.334.334 0 0 1 0-.667H19V7.333h-1.333v-.667h-1.333v.701A1.669 1.669 0 0 0 15 9c0 .919.748 1.666 1.667 1.666h.667a.334.334 0 0 1 0 .667H15v1.333h1.333v.667z" />
    </g>
  </svg>
);

export default SvgComponent;
