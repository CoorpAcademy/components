import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M11.383 3.079a1.002 1.002 0 0 0-1.09.217L6 8.002H3c-.55 0-1 .451-1 1v6c0 .55.45 1 1 1h3l4.293 4.708A1.002 1.002 0 0 0 12 20.002v-16a.998.998 0 0 0-.617-.923z"
    />
  </svg>
);

export default SvgComponent;
