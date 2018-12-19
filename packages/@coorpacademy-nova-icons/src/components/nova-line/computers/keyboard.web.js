import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill="currentColor" d="M8 17h8v2H8z" />
    <path
      d="M22 8h-9V7c0-.551.449-1 1-1h1c1.654 0 3-1.346 3-3V2h-2v1c0 .551-.449 1-1 1h-1c-1.654 0-3 1.346-3 3v1H2c-1.103 0-2 .896-2 2v10c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V10c0-1.104-.897-2-2-2zM2 20V10h20l.001 10H2z"
      fill="currentColor"
    />
    <circle cx={6} cy={12} r={1} fill="currentColor" />
    <circle cx={9} cy={12} r={1} fill="currentColor" />
    <circle cx={12} cy={12} r={1} fill="currentColor" />
    <circle cx={15} cy={12} r={1} fill="currentColor" />
    <circle cx={18} cy={12} r={1} fill="currentColor" />
    <circle cx={6} cy={15} r={1} fill="currentColor" />
    <circle cx={9} cy={15} r={1} fill="currentColor" />
    <circle cx={12} cy={15} r={1} fill="currentColor" />
    <circle cx={15} cy={15} r={1} fill="currentColor" />
    <circle cx={18} cy={15} r={1} fill="currentColor" />
  </svg>
);

export default SvgComponent;
