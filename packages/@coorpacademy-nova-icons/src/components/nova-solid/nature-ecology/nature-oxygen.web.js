import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 8.5C16 6.019 13.981 4 11.5 4S7 6.019 7 8.5v3c0 2.482 2.019 4.5 4.5 4.5s4.5-2.018 4.5-4.5v-3zm-3 3c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5v-3a1.501 1.501 0 0 1 3 0v3zM20 16.333c0-1.102-.897-2-2-2s-2 .898-2 2V17h1.333v-.667a.667.667 0 0 1 1.334 0c0 .653-1.283 2.34-2.471 3.529A.666.666 0 0 0 16.667 21H20v-1.333h-1.816c.831-.979 1.816-2.349 1.816-3.334z" />
    </g>
  </svg>
);

export default SvgComponent;
