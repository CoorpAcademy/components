import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M20 6h-3V5c0-1.654-1.346-3-3-3h-4C8.346 2 7 3.346 7 5v1H4c-1.103 0-2 .896-2 2v10c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.104-.897-2-2-2zM9 5c0-.551.449-1 1-1h4c.551 0 1 .449 1 1v1H9V5zM4 18V8h16l.001 10H4z" />
      <circle cx={15} cy={12} r={2} />
      <path d="M6 13h5v3H6z" />
    </g>
  </svg>
);

export default SvgComponent;
