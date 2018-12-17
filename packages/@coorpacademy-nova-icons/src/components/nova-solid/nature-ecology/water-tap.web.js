import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M15 13h4V9c0-2.205-1.794-4-4-4h-4V3h3V1H6v2h3v2H2v4h13v4z" />
      <circle cx={17} cy={16} r={1} />
      <circle cx={15} cy={18.5} r={1} />
      <circle cx={19} cy={18.5} r={1} />
      <circle cx={17} cy={21} r={1} />
      <circle cx={13} cy={21} r={1} />
      <circle cx={21} cy={21} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
