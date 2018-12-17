import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={11.5} cy={12.5} r={2.5} />
      <path d="M18 2v3h-2V2h-3v3h-2V2H8v3H6V2H3v20h18V2h-3zm-1.228 15.772c-.331.33-.77.513-1.237.513a1.74 1.74 0 0 1-1.237-.513l-1.108-1.107A4.468 4.468 0 0 1 11.5 17 4.505 4.505 0 0 1 7 12.5C7 10.019 9.019 8 11.5 8s4.5 2.019 4.5 4.5c0 .598-.123 1.167-.335 1.69l1.108 1.108c.331.33.513.77.513 1.237a1.741 1.741 0 0 1-.514 1.237z" />
    </g>
  </svg>
);

export default SvgComponent;
