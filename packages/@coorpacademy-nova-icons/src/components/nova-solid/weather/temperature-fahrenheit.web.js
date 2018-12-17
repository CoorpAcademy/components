import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 2.002c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.478-10-10-10zm-5 5a2 2 0 1 1 4.001.001A2 2 0 0 1 7 7.002zm10 4h-5v2h4v2h-4v4h-2v-8c0-1.104.897-2 2-2h5v2z"
    />
  </svg>
);

export default SvgComponent;
