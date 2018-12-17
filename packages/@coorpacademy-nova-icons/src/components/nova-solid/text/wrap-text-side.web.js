import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20 2H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM10 17H6v-4h4v4zm0-6H6V7h4v4zm6 6h-4v-2h4v2zm2-4h-6v-2h6v2zm0-4h-6V7h6v2z"
    />
  </svg>
);

export default SvgComponent;
