import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20 2H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM6 7h6v2H6V7zm0 4h6v2H6v-2zm12 6H6v-2h12v2zm0-4h-4V7h4v6z"
    />
  </svg>
);

export default SvgComponent;
