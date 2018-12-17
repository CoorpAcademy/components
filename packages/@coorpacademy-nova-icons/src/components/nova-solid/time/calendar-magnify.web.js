import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <g fill="currentColor">
      <circle cx={11.5} cy={12.5} r={2.5} />
      <path d="M16.773 17.772a1.74 1.74 0 0 1-1.238.513c-.467 0-.906-.182-1.237-.511l-1.108-1.109A4.468 4.468 0 0 1 11.5 17 4.505 4.505 0 0 1 7 12.5C7 10.019 9.019 8 11.5 8s4.5 2.019 4.5 4.5c0 .598-.123 1.167-.335 1.69l1.108 1.108a1.752 1.752 0 0 1 0 2.474zM21 3h-2V1h-2v5h-1V3H8V1H6v5H5V3H3c-1.103 0-2 .898-2 2v15c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V5c0-1.102-.897-2-2-2z" />
    </g>
  </svg>
);

export default SvgComponent;
