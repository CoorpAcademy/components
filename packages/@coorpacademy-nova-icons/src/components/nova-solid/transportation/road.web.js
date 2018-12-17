import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M18.161 2.804A1 1 0 0 0 17.18 2H6.82a.998.998 0 0 0-.98.804l-3.6 18A.998.998 0 0 0 3.22 22h17.56a1.001 1.001 0 0 0 .98-1.196l-3.599-18zM13 20h-2v-4h2v4zm0-6h-2v-4h2v4zm0-6h-2V4h2v4z"
    />
  </svg>
);

export default SvgComponent;
