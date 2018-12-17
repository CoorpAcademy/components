import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24.001v24.001H0z" />
    <g fill="currentColor">
      <path d="M10 14.002H2.711l.908 4.999H10v-4.999zm-1 2.999H5v-1h4v1z" />
      <path d="M13 20.001v-7h8.471l.513-2.821a1.001 1.001 0 0 0-.429-1.011L19 7.466V3.001a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1c0 1.102-.898 2-2 2-1.103 0-2-.898-2-2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v4.465L2.446 9.169a1.002 1.002 0 0 0-.43 1.011l.514 2.821H11v7H3.801l.215 1.179c.086.476.5.821.984.821h14a1 1 0 0 0 .983-.821l.214-1.179H13zm1-12h4v2h-4v-2zm-4 2H6v-2h4v2z" />
      <path d="M14 19.001h6.38l.909-4.999H14v4.999zm1-3h4v1h-4v-1z" />
    </g>
  </svg>
);

export default SvgComponent;
