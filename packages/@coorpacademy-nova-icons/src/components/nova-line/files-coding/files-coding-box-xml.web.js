import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 6H2C.897 6 0 6.898 0 8v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V8c0-1.102-.897-2-2-2zM2 17V8h20l.001 9H2z" />
      <path d="M18.125 9h-1.75v7h4.375v-1.75h-2.625zM14.878 9.038a.872.872 0 0 0-.981.352l-1.022 1.533-1.022-1.533a.875.875 0 0 0-1.603.485V16H12v-3.235l.147.221c.325.487 1.131.487 1.456 0l.147-.221V16h1.75V9.875a.875.875 0 0 0-.622-.837zM7.45 9l-1.079 1.799L5.292 9H3.25l2.101 3.5L3.25 16h2.042l1.079-1.799L7.45 16h2.041l-2.1-3.5 2.1-3.5z" />
    </g>
  </svg>
);

export default SvgComponent;
