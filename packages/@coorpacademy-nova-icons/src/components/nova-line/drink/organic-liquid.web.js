import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 19v-8c0-2.719-1.933-4.096-3-4.648V5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v1.352C2.933 6.904 1 8.281 1 11v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1zM5 2h4v1H5V2zm6 16H3v-7c0-2.224 2.227-3.021 2.316-3.051A1 1 0 0 0 6 7V5h2v2c0 .427.276.808.678.947C8.773 7.979 11 8.776 11 11v7z" />
      <path d="M5 14a2 2 0 0 0 4 0c0-1.104-2-4-2-4s-2 2.896-2 4zM22 15.414L20.586 14 19 15.586V14h-2v3.586l-1 1V17h-2v3.586l-1.707 1.707 1.414 1.414L15.414 22H19v-2h-1.586l1-1H22v-2h-1.586z" />
    </g>
  </svg>
);

export default SvgComponent;
