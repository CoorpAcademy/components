import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M12 3c-4.962 0-9 4.037-9 9s4.038 9 9 9 9-4.037 9-9-4.038-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
      <path d="M9 9v6a1 1 0 0 0 1 1h5v-2h-4v-1h3v-2h-3v-1h4V8h-5a1 1 0 0 0-1 1z" />
    </g>
  </svg>
);

export default SvgComponent;
