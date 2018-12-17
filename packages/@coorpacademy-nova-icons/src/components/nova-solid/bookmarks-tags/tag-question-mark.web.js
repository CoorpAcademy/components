import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M19 0h-7a.997.997 0 0 0-.707.293l-11 11a.999.999 0 0 0 0 1.414l7 7a.997.997 0 0 0 1.414 0l11-11A.997.997 0 0 0 20 8V1a1 1 0 0 0-1-1zm-4 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM20 12c-2.206 0-4 1.794-4 4h2c0-1.102.897-2 2-2s2 .898 2 2-.897 2-2 2h-1v3h2v-1.127A4.005 4.005 0 0 0 24 16c0-2.206-1.794-4-4-4z" />
      <circle cx={20} cy={23} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
