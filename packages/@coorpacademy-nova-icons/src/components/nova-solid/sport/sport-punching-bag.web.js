import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M14.646 7.116L11.75 2.774V1h-1.5v1.774L7.354 7.116A1.995 1.995 0 0 0 6 9v1h10V9c0-.877-.569-1.614-1.354-1.884zM12.765 7h-3.53L11 4.352 12.765 7zM6 20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1H6v1zM6 12h10v5H6z" />
    </g>
  </svg>
);

export default SvgComponent;
