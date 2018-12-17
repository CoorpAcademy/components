import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M11 10v1.051c-1.14.232-2 1.242-2 2.449 0 1.378 1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H9v2h2v1h2v-1.05c1.14-.233 2-1.243 2-2.45 0-1.378-1.122-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1H15v-2h-2v-1h-2z" />
      <path d="M21.707 12.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14h2v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8h2a1 1 0 0 0 .707-1.707zM18 12a1 1 0 0 0-1 1v8H7v-8a1 1 0 0 0-1-1h-.586L12 5.415 18.586 12H18z" />
    </g>
  </svg>
);

export default SvgComponent;
