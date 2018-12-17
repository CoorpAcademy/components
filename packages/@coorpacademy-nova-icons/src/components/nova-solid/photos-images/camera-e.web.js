import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5c0-1.103-.896-2-2-2zm-4 7h-4v1h3v2h-3v1h4v2h-5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h5v2z"
    />
  </svg>
);

export default SvgComponent;
