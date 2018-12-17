import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001-.001h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M16 10.5a.5.5 0 0 1-.5-.5h-1c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5h-1a.5.5 0 0 1-.5.5z" />
      <path d="M12 2c-4.971 0-9 3.477-9 9s4.029 11 9 11 9-5.478 9-11-4.029-9-9-9zm-7 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm10 8H9v-2h6v2zm1-5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
      <path d="M8 10.5a.5.5 0 0 1-.5-.5h-1c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5h-1a.5.5 0 0 1-.5.5z" />
    </g>
  </svg>
);

export default SvgComponent;
