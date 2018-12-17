import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24.001v24.001H0z" />
    <g fill="currentColor">
      <path d="M8.908 17.196L4.242 16.03l-.484 1.941 1.026.257zM15.092 20.804l4.666 1.167.484-1.941-1.026-.257zM3.757 20.03l15.999-4 .485 1.94-16 4zM12 17c3.309 0 6-2.691 6-6 0-2.238-1.946-5.222-2.168-5.555a1.003 1.003 0 0 0-1.539-.152L13 6.586V2a1.002 1.002 0 0 0-1.707-.707C11.076 1.509 6 6.636 6 11c0 3.309 2.691 6 6 6z" />
    </g>
  </svg>
);

export default SvgComponent;
