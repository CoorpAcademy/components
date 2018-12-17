import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 11v8l8-4z" />
      <path d="M20.998 7.929A1.001 1.001 0 0 0 20 7h-2v2h1.068l.857 12H4.074l.858-12H6V7H4c-.524 0-.96.405-.998.929l-1 14A1 1 0 0 0 3 23h18a1.001 1.001 0 0 0 .998-1.071l-1-14z" />
      <path d="M10 7h4v2h-4z" />
      <path d="M9 6c0-1.654 1.346-3 3-3s3 1.346 3 3v3h2V6c0-2.757-2.243-5-5-5S7 3.243 7 6v3h2V6z" />
    </g>
  </svg>
);

export default SvgComponent;
