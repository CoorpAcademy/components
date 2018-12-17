import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c5.522 0 10-4.478 10-10S17.522 2 12 2zm1.378 10.65L14 17h-4l.622-4.35A2.988 2.988 0 0 1 9 10a3.001 3.001 0 0 1 6 0 2.988 2.988 0 0 1-1.622 2.65z"
    />
  </svg>
);

export default SvgComponent;
