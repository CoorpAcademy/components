import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 12c0-4.1 2.47-7.619 6-9.162A9.957 9.957 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10a9.94 9.94 0 0 0 4-.838C12.47 19.619 10 16.1 10 12z" />
      <path d="M19.091 13.909L18 11l-1.091 2.909L14 15l2.909 1.091L18 19l1.091-2.909L22 15zM18.182 6.182L16 7l2.182.818L19 10l.818-2.182L22 7l-2.182-.818L19 4z" />
    </g>
  </svg>
);

export default SvgComponent;
