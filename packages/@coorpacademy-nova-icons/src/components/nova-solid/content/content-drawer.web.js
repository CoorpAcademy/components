import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M7 16v3c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-3H7zm5 3a1 1 0 1 1-.002-1.998A1 1 0 0 1 12 19zM17 9V6c0-.549-.45-1-1-1H8c-.55 0-1 .451-1 1v3h10zm-5-2.999a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM17 15v-5H7v5h10zm-5.25-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      <path d="M18 2H6c-1.103 0-2 .898-2 2v17c0 1.103.897 2 2 2h12c1.104 0 2-.897 2-2V4c0-1.102-.896-2-2-2zm0 17c0 1.103-.896 2-2 2H8c-1.102 0-2-.897-2-2V6c0-1.103.898-2 2-2h8c1.104 0 2 .897 2 2v13z" />
    </g>
  </svg>
);

export default SvgComponent;
