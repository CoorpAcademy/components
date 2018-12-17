import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.002-.002h24.001V24H-.002z" />
    <path
      fill="currentColor"
      d="M21.707 9.293l-6-6a.999.999 0 0 0-1.414 0l-13 13 1.414 1.413L7 13.414l5.293 5.292a.994.994 0 0 0 1.414 0l8-8a.998.998 0 0 0 0-1.413zM15 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-2 12l-2-2 7-7 2 2-7 7z"
    />
  </svg>
);

export default SvgComponent;
