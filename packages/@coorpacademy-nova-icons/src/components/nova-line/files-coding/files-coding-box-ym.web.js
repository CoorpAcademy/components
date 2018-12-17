import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 6H2C.897 6 0 6.898 0 8v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V8c0-1.102-.897-2-2-2zM2 17V8h20l.001 9H2z" />
      <path d="M8.5 11.188L7.625 9h-1.75l1.75 4.375h.013V16h1.75v-2.657L11.125 9h-1.75zM17.503 9.038a.873.873 0 0 0-.981.352L15.5 10.923 14.478 9.39a.874.874 0 0 0-1.603.485V16h1.75v-3.235l.147.221c.325.487 1.131.487 1.456 0l.147-.221V16h1.75V9.875a.877.877 0 0 0-.622-.837z" />
    </g>
  </svg>
);

export default SvgComponent;
