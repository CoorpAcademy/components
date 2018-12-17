import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      fill="currentColor"
      d="M16 3V1h-2v2H8c-1.103 0-2 .897-2 2v15c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2V5c0-1.103-.897-2-2-2zm-6 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2-5H8V5h8v4z"
    />
  </svg>
);

export default SvgComponent;
