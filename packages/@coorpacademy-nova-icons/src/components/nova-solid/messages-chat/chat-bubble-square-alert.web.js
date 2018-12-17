import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M19.998 2h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h2v4l5.333-4h8.666c1.103 0 2-.897 2-2V4a2 2 0 0 0-1.999-2zm-8 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-3h-2V6h2v5z"
    />
  </svg>
);

export default SvgComponent;
