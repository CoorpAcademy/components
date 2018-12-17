import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M4 4h12v2H4zM21 7v2H11V7H9v2H6.5A4.505 4.505 0 0 0 2 13.5c0 1.953 1.258 3.603 3 4.224V20H4c-.551 0-1-.449-1-1v-1H1v1c0 1.654 1.346 3 3 3h12v-2h-3v-2.762a4.502 4.502 0 0 0 1.774-2.4l7.468-1.867c.446-.112.758-.512.758-.971V7h-2zM11 20H7v-2c4.199 0 3.305.028 4-.051V20zm-.5-4h-4C5.122 16 4 14.879 4 13.5S5.122 11 6.5 11h4c1.378 0 2.5 1.121 2.5 2.5S11.878 16 10.5 16zM21 11.219l-6.077 1.52a4.469 4.469 0 0 0-.685-1.738H21v.218z" />
      <circle cx={6.5} cy={13.5} r={1.5} />
    </g>
  </svg>
);

export default SvgComponent;
