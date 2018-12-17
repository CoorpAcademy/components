import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.002h24v24h-24z" />
    <path
      fill="currentColor"
      d="M21.707 12.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14h1v9h16v-9h1a.999.999 0 0 0 .707-1.707zm-8.329 3.357L14 20h-4l.622-4.35A2.991 2.991 0 0 1 9 13a3.001 3.001 0 0 1 6 0 2.99 2.99 0 0 1-1.622 2.65z"
    />
  </svg>
);

export default SvgComponent;
