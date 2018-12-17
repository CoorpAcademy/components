import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <g fill="currentColor">
      <path d="M17.912 10.377a1.01 1.01 0 0 0-1.297-.523l-2.806 1.249L10.488 9l-1.607.832L12 11.857h.116l-2.43 1.082L7.584 12 6 12.913l4 2.006 2.199-1.015-1.523 3.954 1.797-.934 2.191-4.003 2.732-1.204c.248-.107.439-.31.537-.562a1.023 1.023 0 0 0-.021-.778z" />
      <path d="M21 3h-3V1h-2v6h2V5h3v15H3V5h2V3H3a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
      <path d="M15 3H8V1H6v6h2V5h7z" />
    </g>
  </svg>
);

export default SvgComponent;
