import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 5H3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zM11 17v2H4v-2zM21 5h-3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-1 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-8h-3V8h3v1z"
    />
  </svg>
);

export default SvgComponent;
