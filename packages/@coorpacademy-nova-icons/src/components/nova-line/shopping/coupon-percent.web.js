import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M23 10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1c1.104 0 2 .898 2 2 0 1.103-.896 2-2 2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1c-1.104 0-2-.897-2-2 0-1.102.896-2 2-2zm-1 5.874V19h-4v-2h-2v2H2v-3.126C3.723 15.428 5 13.86 5 12S3.723 8.573 2 8.126V5h14v2h2V5h4v3.126c-1.723.447-3 2.014-3 3.874s1.277 3.428 3 3.874z" />
      <path d="M16 9h2v2h-2zM16 13h2v2h-2zM6.293 14.293l7-7 1.413 1.414-7 7z" />
      <circle cx={8} cy={9} r={2} />
      <circle cx={13} cy={14} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
