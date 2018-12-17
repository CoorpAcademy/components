import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24.001v24.002H0z" />
    <path
      fill="currentColor"
      d="M18 2H6c-1.104 0-2 .897-2 2v16c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2V4c0-1.103-.896-2-2-2zM7.001 6a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM12 16l-3-4 3-4 3 4-3 4zm5 4a1 1 0 1 1 0-2 1 1 0 1 1 0 2z"
    />
  </svg>
);

export default SvgComponent;
