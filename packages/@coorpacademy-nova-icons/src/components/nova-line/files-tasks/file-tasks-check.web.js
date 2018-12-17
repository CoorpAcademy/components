import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 15.586l-2.293-2.293-1.414 1.414L11 18.415l5.707-5.708-1.414-1.414z" />
      <path d="M19 5h-2V3h-1.142c-.447-1.719-2-3-3.858-3S8.589 1.281 8.142 3H7v2H5c-1.103 0-2 .898-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V7c0-1.102-.897-2-2-2zm-7-3c.739 0 1.385.402 1.731 1h-3.463c.347-.598.993-1 1.732-1zM9 5h6v2H9V5zm10 16H5V7h2v2h10V7h2v14z" />
    </g>
  </svg>
);

export default SvgComponent;
