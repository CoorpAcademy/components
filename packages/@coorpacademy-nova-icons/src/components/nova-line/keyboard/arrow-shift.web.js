import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M21.707 11.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13h4v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8h4a1.002 1.002 0 0 0 .707-1.707zM16 11a1 1 0 0 0-1 1v8H9v-8a1 1 0 0 0-1-1H5.414L12 4.414 18.586 11H16z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
