import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <g fill="currentColor">
      <circle cx={11} cy={15} r={2} />
      <path d="M21.707 12.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14h1v9h16v-9h1a.999.999 0 0 0 .707-1.707zm-6.414 8.413l-2.274-2.273A3.95 3.95 0 0 1 11 19c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4c0 .74-.215 1.424-.567 2.019l2.274 2.274-1.414 1.413z" />
    </g>
  </svg>
);

export default SvgComponent;
