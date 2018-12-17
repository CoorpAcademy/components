import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20 8h-4V4c0-1.102-.897-2-2-2H4c-1.103 0-2 .898-2 2v10c0 1.103.897 2 2 2h4v4c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V10c0-1.102-.897-2-2-2zM8 10v4H4V4h10v4h-4c-1.103 0-2 .898-2 2zm2 10V10h10l.001 10H10z"
      fill="#767676"
    />
  </svg>
);

export default SvgComponent;
