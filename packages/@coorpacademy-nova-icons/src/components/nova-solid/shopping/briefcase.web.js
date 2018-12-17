import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21.258 15H14v2l-2 1-2-1v-2H2.742l-.61 4.884a1.885 1.885 0 0 0 .448 1.486c.354.401.871.63 1.42.63h16c.549 0 1.066-.229 1.42-.63.353-.4.517-.942.448-1.486L21.258 15zM19 6h-3c0-2.206-1.794-4-4-4-2.205 0-4 1.794-4 4H5C3.346 6 2 7.346 2 9v4a.99.99 0 0 0 .871.974L2.867 14H10v-1h4v1h7.133l-.003-.026A.988.988 0 0 0 22 13V9c0-1.654-1.346-3-3-3zm-9 0c0-1.102.898-2 2-2 1.104 0 2 .898 2 2h-4z" />
    </g>
  </svg>
);

export default SvgComponent;
