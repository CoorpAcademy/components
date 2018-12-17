import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 2.003c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm2 6h4v2h-4v-2zm-8 0h4v2H6v-2zm0 8c-1.106 0-2-.895-2-2s.894-2 2-2 2 .894 2 2-.894 2-2 2zm8 2h-4v-2h4v2zm4-2a2 2 0 1 1-.001-3.999A2 2 0 0 1 18 16.003z"
    />
  </svg>
);

export default SvgComponent;
