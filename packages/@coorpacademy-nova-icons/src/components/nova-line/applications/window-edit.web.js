import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 6h17.999v2.994H22V2c0-1.103-.897-2-2-2H2C.897 0 0 .897 0 2v16c0 1.103.897 2 2 2h7v-2H2V6zm5-2V2h3v2H7zm13 0h-8V2h8v2zM5 2v2H2V2h3z" />
      <path d="M23.707 14.287l-3-3a.999.999 0 0 0-1.414 0l-7 7a1.001 1.001 0 0 0-.263.465l-1 4a1 1 0 0 0 1.213 1.212l4-1a.998.998 0 0 0 .464-.263l7-7a.999.999 0 0 0 0-1.414zm-8.218 6.804l-2.114.528.528-2.113L17 16.409l1.586 1.585-3.097 3.097zM20 16.58l-1.586-1.586L20 13.409l1.586 1.585L20 16.58z" />
    </g>
  </svg>
);

export default SvgComponent;
