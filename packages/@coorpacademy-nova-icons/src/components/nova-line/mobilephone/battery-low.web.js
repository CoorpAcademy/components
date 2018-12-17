import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M18 5h-2V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H6a1 1 0 0 0-1 1v14c0 1.104.897 2 2 2h10c1.103 0 2-.896 2-2V6a1 1 0 0 0-1-1zM9 7a1 1 0 0 0 1-1V4h4v2a1 1 0 0 0 1 1h2l.001 9H7V7h2zM7 20v-2h10.001v2H7z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
