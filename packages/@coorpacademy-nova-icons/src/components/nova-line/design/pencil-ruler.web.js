import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M6 4C4.346 4 3 5.346 3 7v11.303l3 4.5 3-4.5V7c0-1.654-1.346-3-3-3zm1 13.697l-1 1.5-1-1.5V10h2v7.697zM5 8V7a1.001 1.001 0 0 1 2 0v1H5zM19 1h-6c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2V3c0-1.102-.897-2-2-2zm-6 20v-3h3v-2h-3v-3h3v-2h-3V8h3V6h-3V3h6l.001 18H13z" />
    </g>
  </svg>
);

export default SvgComponent;
