import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M18.001 24h-12v-2c0-2.757 2.243-5 5-5h2c2.757 0 5 2.243 5 5v2zm-10-2h8c0-1.654-1.346-3-3-3h-2c-1.654 0-3 1.346-3 3zM4.001 22c0-.695.105-1.365.295-2H3.001c-1.654 0-3 1.346-3 3v1h4v-2zM7.523 15.934a2.497 2.497 0 0 0-4.929.566c0 1.248.917 2.273 2.111 2.461a7.027 7.027 0 0 1 2.818-3.027zM21.001 20h-1.295c.189.635.295 1.305.295 2v2h4v-1c0-1.654-1.346-3-3-3zM19.093 14c-1.22 0-2.232.876-2.452 2.032a7.032 7.032 0 0 1 2.665 2.946A2.493 2.493 0 0 0 19.093 14zM12.001 17c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1z"
      fill="currentColor"
    />
    <path
      d="M17.001 0h-10a2 2 0 0 0-2 2v11l3-3h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 8h-8V6h8v2zm0-4h-8V2h8v2z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
