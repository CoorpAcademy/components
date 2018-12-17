import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001-.001h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M12 2C6.206 2 2 6.205 2 12c0 6.394 4.673 12 10 12s10-5.606 10-12c0-5.795-4.206-10-10-10zm0 20c-4.187 0-8-4.766-8-10 0-4.71 3.29-8 8-8s8 3.29 8 8c0 5.234-3.813 10-8 10z" />
      <path d="M11 11a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-3 1a1 1 0 0 1-1-1h2a1 1 0 0 1-1 1zM16 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 4a1 1 0 0 1-1-1h2a1 1 0 0 1-1 1zM9 17h6v2H9z" />
    </g>
  </svg>
);

export default SvgComponent;
