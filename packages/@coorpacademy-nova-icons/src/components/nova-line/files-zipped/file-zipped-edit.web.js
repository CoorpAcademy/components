import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M6 4h2v2H6zM4 6h2v2H4zM6 8h2v2H6zM4 10h2v2H4z" />
      <path d="M2 2h2v2h2V2h8v7h2V2c0-1.103-.897-2-2-2H2C.897 0 0 .897 0 2v16c0 1.103.897 2 2 2h7v-2H2V2zM23.707 14.294l-3-3a.997.997 0 0 0-1.414 0l-7 7a.989.989 0 0 0-.263.464l-1 4a1 1 0 0 0 1.213 1.212l4-1a.998.998 0 0 0 .464-.263l7-7a.998.998 0 0 0 0-1.413zm-8.218 6.803l-2.114.529.528-2.114L17 16.415 18.586 18l-3.097 3.097zM20 16.586L18.414 15 20 13.415 21.586 15 20 16.586z" />
    </g>
  </svg>
);

export default SvgComponent;
