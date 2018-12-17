import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.002H0z" />
    <g fill="currentColor">
      <path d="M19.998 9.998v2h-16v-2h-2v12h2v-1h16v1h2v-12h-2zm-7 4h3v5h-3v-5zm-2 5h-3v-5h3v5zm-7-5h2v5h-2v-5zm14 5v-5h2v5h-2zM8.998 8.998h2v-3h1v3h2v-3h1v3h2v-3h1v-2h-4v-2h-2v2h-4v2h1z" />
    </g>
  </svg>
);

export default SvgComponent;
