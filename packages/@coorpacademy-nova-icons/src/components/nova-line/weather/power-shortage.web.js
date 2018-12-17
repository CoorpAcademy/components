import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21.707 12.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14h2v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3h2v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 .707-1.707zM18 12a1 1 0 0 0-1 1v7h-2v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3H7v-7a1 1 0 0 0-1-1h-.586L12 5.414 18.586 12H18z" />
      <path d="M12 8l-4 4h3v3l4-4h-3z" />
    </g>
  </svg>
);

export default SvgComponent;
