import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 19a7 7 0 0 1 7-7c.34 0 .672.033 1 .08V5c0-1.102-.897-2-2-2h-2V0h-2v3H6V0H4v3H2C.897 3 0 3.898 0 5v13c0 1.103.897 2 2 2h10.08a7.026 7.026 0 0 1-.08-1zM2 5h16v3H2V5z" />
      <path d="M22.293 17.292L20 19.585v-5.586h-2v5.586l-2.293-2.293-1.414 1.414L19 23.413l4.707-4.707z" />
    </g>
  </svg>
);

export default SvgComponent;
