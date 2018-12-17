import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 16a7 7 0 0 1 7-7c.133 0 .263.013.395.019l.312-.312A.997.997 0 0 0 20 8V1a1 1 0 0 0-1-1h-7a.997.997 0 0 0-.707.293l-11 11a.999.999 0 0 0 0 1.414l7 7a.997.997 0 0 0 1.414 0L12 16.414V16zm3-13a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
      <path d="M22.999 15c0-2.206-1.794-4-4-4s-4 1.794-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .898 2 2h-4c0-1.102.897-2 2-2zm3 9h-6v-5h6v5z" />
      <circle cx={18.999} cy={19} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
