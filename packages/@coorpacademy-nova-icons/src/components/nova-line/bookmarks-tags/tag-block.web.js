import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={15} cy={5} r={2} />
      <path d="M8.793 16.793L8 17.586 2.414 12l10-10H18v5.586l-1.209 1.209 1.415 1.413 1.501-1.501A.996.996 0 0 0 20 8V1a1 1 0 0 0-1-1h-7a.996.996 0 0 0-.707.293l-11 11a.999.999 0 0 0 0 1.414l7 7a.997.997 0 0 0 1.414 0l1.5-1.5-1.414-1.414z" />
      <path d="M18 12c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 2c.739 0 1.424.215 2.02.566l-5.453 5.453A3.95 3.95 0 0 1 14 18c0-2.205 1.795-4 4-4zm0 8a3.965 3.965 0 0 1-2.02-.566l5.453-5.453A3.95 3.95 0 0 1 22 18c0 2.205-1.795 4-4 4z" />
    </g>
  </svg>
);

export default SvgComponent;
