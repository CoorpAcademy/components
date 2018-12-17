import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M9 6V4h2v2h2V4h2v2h2V4h2v2h2V2H1v20h4v-2H3v-2h2v-2H3v-2h2v-2H3v-2h2V8H3V4h4v2z" />
      <path d="M22.707 15.293l-7-7a.999.999 0 0 0-1.414 0l-7 7A1 1 0 0 0 8 17h2v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-4h2a1 1 0 0 0 .707-1.707zM19 15a1 1 0 0 0-1 1v4h-1v-3h-4v3h-1v-4a1 1 0 0 0-1-1h-.586L15 10.414 19.586 15H19z" />
    </g>
  </svg>
);

export default SvgComponent;
