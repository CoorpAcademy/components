import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <path
      fill="currentColor"
      d="M12 2a8 8 0 0 0-8 8c0 4.418 8 12 8 12s8-7.582 8-12a8 8 0 0 0-8-8zm1 14h-2V9h2v7zm-1-9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
    />
  </svg>
);

export default SvgComponent;
