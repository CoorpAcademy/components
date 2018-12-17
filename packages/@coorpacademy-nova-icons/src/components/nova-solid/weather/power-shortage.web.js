import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M21.707 12.295l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14.002h2v8h5v-5h4v5h5v-8h2a1 1 0 0 0 .707-1.707zM11 14.002v-4H8l4-5v4h3l-4 5z"
    />
  </svg>
);

export default SvgComponent;
