import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .003h24v24H0z" />
    <g fill="currentColor">
      <path d="M19 8.001h-1v2h1v6H5v-6h1v-2H5c-1.103 0-2 .896-2 2v9c0 1.102.897 2 2 2h6v1H8v2h8v-2h-3v-1h6c1.104 0 2-.898 2-2v-9c0-1.103-.896-2-2-2z" />
      <path d="M16.707 7.708l-1.414-1.414L13 8.587V.001h-2v8.586L8.707 6.294 7.293 7.708 12 12.415z" />
    </g>
  </svg>
);

export default SvgComponent;
