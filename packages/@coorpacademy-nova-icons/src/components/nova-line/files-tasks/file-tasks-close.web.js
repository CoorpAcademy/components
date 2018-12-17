import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14.121 11.93L12 14.051 9.879 11.93l-1.414 1.414 2.121 2.121-2.121 2.121L9.879 19 12 16.879 14.121 19l1.414-1.414-2.121-2.121 2.121-2.121z" />
      <path d="M19 5h-2V3h-1.142c-.447-1.719-2-3-3.858-3S8.589 1.281 8.142 3H7v2H5c-1.103 0-2 .898-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V7c0-1.102-.897-2-2-2zm-7-3c.739 0 1.385.402 1.731 1h-3.463c.347-.598.993-1 1.732-1zM9 5h6v2H9V5zm10 16H5V7h2v2h10V7h2v14z" />
    </g>
  </svg>
);

export default SvgComponent;
