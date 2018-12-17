import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M10 18H6V2h10v8h2V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h9v-2zm-6 0H2V2h2v16zM17 16v4l3-2z"
      fill="currentColor"
    />
    <path
      d="M18 24c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6c0 3.31-2.691 6-6 6zm0-10c-2.205 0-4 1.794-4 4s1.795 4 4 4 4-1.794 4-4-1.795-4-4-4z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
