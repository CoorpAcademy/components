import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.414 1.003H5c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h14c1.104 0 2-.897 2-2V5.59l-4.586-4.587zM5 21.003v-18h10v4h4l.001 14H5z" />
      <path d="M15.5 11.006H12v8h3.5c1.379 0 2.5-1.122 2.5-2.5 0-.565-.195-1.081-.513-1.5.317-.419.513-.934.513-1.5 0-1.379-1.121-2.5-2.5-2.5zm0 6H14v-1h1.5a.5.5 0 0 1 0 1zm0-3H14v-1h1.5a.5.5 0 0 1 0 1zM12 14.006c0-1.654-1.346-3-3-3H6v8h2v-2h.518l1.167 2H12l-1.432-2.454A2.991 2.991 0 0 0 12 14.006zm-3 1H8v-2h1a1 1 0 0 1 0 2z" />
    </g>
  </svg>
);

export default SvgComponent;
