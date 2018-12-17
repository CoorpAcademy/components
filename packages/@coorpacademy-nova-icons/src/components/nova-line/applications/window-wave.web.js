import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M21 2H3c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 4h-8V4h8v2zM8 6V4h3v2H8zm12.999 2v4H20a.998.998 0 0 0-.707.294L18 13.586l-3.293-3.292a.996.996 0 0 0-1.488.082l-3.302 4.127-2.21-2.209a.997.997 0 0 0-1.414 0L4.586 14H3V8h17.999zM6 4v2H3V4h3zM3 20v-4h2c.265 0 .52-.106.707-.292L7 14.414l2.293 2.293A1 1 0 0 0 10 17l.055-.001c.284-.016.548-.152.726-.374l3.302-4.127 3.21 3.21a1 1 0 0 0 1.414 0L20.414 14h.584l-.001 6H3z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
