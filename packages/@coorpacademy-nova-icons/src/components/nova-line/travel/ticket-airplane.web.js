import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M22 4H2C.897 4 0 4.896 0 6v14c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V6c0-1.104-.897-2-2-2zM6 20H2V6h20l.001 14H6z" />
      <path d="M18.615 9.854l-2.806 1.249L12.488 9l-1.607.832L14 11.858c.201 0-2.13 1-2.314 1.082L9.584 12 8 12.913l4 2.006 2.199-1.015-1.523 3.954 1.797-.934 2.191-4.003 2.732-1.204a1.011 1.011 0 0 0-.781-1.863z" />
      <circle cx={6} cy={7} r={1} />
      <circle cx={6} cy={11} r={1} />
      <circle cx={6} cy={15} r={1} />
      <circle cx={6} cy={19} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
