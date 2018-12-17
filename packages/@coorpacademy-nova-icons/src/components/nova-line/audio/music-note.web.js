import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M10 5.279v8.278A3.95 3.95 0 0 0 8 13c-2.206 0-4 1.795-4 4 0 2.206 1.794 4 4 4s4-1.794 4-4V6.721l3.682-1.227-.662 3.31 1.961.393 1.338-6.689L10 5.279zM8 19c-1.103 0-2-.897-2-2 0-1.102.897-2 2-2s2 .898 2 2c0 1.103-.897 2-2 2z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
