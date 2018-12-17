import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M6.883 5.439l-1.53-1.287A8.83 8.83 0 0 1 12.123 1a8.84 8.84 0 0 1 6.758 3.137L17.354 5.43A6.836 6.836 0 0 0 12.123 3a6.838 6.838 0 0 0-5.24 2.439z"
      fill="currentColor"
    />
    <path
      d="M14.813 7.832a3.338 3.338 0 0 0-2.689-1.345c-1.066 0-2.046.49-2.688 1.345l-1.6-1.201a5.318 5.318 0 0 1 4.287-2.144c1.703 0 3.266.781 4.289 2.146l-1.599 1.199zM22 23H2c-1.103 0-2-.897-2-2V11c0-1.104.897-2 2-2h20c1.103 0 2 .896 2 2v10c0 1.103-.897 2-2 2zM2 11v10h20.001L22 11H2z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M8 18h8v2H8z" />
    <circle cx={6} cy={13} r={1} fill="currentColor" />
    <circle cx={9} cy={13} r={1} fill="currentColor" />
    <circle cx={12} cy={13} r={1} fill="currentColor" />
    <circle cx={15} cy={13} r={1} fill="currentColor" />
    <circle cx={18} cy={13} r={1} fill="currentColor" />
    <circle cx={6} cy={16} r={1} fill="currentColor" />
    <circle cx={9} cy={16} r={1} fill="currentColor" />
    <circle cx={12} cy={16} r={1} fill="currentColor" />
    <circle cx={15} cy={16} r={1} fill="currentColor" />
    <circle cx={18} cy={16} r={1} fill="currentColor" />
  </svg>
);

export default SvgComponent;
