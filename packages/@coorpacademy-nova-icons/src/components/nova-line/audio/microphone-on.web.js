import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 8.666a2 2 0 0 0 2-2V4a2 2 0 0 0-4 0v2.666a2 2 0 0 0 2 2z" />
      <path d="M13 13v-1.101A5.01 5.01 0 0 0 17 7h-2c0 1.654-1.346 3-3 3S9 8.654 9 7H7a5.008 5.008 0 0 0 4 4.899V13h2zM17 14v3.697l-2.168-3.252A1 1 0 0 0 13 15v7h2v-3.697l2.168 3.252A1 1 0 0 0 19 21v-7h-2zM8 14c-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3s3-1.346 3-3v-2c0-1.654-1.346-3-3-3zm1 5a1.001 1.001 0 0 1-2 0v-2c0-.551.449-1 1-1s1 .449 1 1v2z" />
    </g>
  </svg>
);

export default SvgComponent;
