import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M18 5h-2V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H6a1 1 0 0 0-1 1v14c0 1.104.897 2 2 2h10c1.103 0 2-.896 2-2V6a1 1 0 0 0-1-1zm-7 14v-5H8l5-7v5h3l-5 7z"
    />
  </svg>
);

export default SvgComponent;
