import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M12 3c-4.962 0-9 4.037-9 9s4.038 9 9 9 9-4.037 9-9-4.038-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
      <path d="M9 10.5c0 1.378 1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H9v2h3.5c1.378 0 2.5-1.122 2.5-2.5S13.878 11 12.5 11h-1a.5.5 0 0 1 0-1H15V8h-3.5A2.503 2.503 0 0 0 9 10.5z" />
    </g>
  </svg>
);

export default SvgComponent;
