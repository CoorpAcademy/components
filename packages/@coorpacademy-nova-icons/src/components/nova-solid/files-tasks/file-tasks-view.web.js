import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 4h-2a2 2 0 0 0-4 0H8v3h8V4z" />
      <path d="M19 5h-1v3H6V5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-2.228 14.773c-.331.331-.77.513-1.237.513-.467 0-.907-.182-1.237-.513l-1.108-1.108A4.468 4.468 0 0 1 11.5 19 4.505 4.505 0 0 1 7 14.5c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5c0 .599-.123 1.167-.335 1.69l1.108 1.108c.331.33.513.77.513 1.237a1.743 1.743 0 0 1-.514 1.238z" />
      <circle cx={11.5} cy={14.5} r={2.5} />
    </g>
  </svg>
);

export default SvgComponent;
