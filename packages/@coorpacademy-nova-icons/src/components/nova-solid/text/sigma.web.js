import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20 3H5a1.002 1.002 0 0 0-.707 1.707L11.586 12l-7.293 7.293A1 1 0 0 0 5 21h15v-2H7.414l6.293-6.293a.998.998 0 0 0 0-1.413L7.414 5H20V3z"
    />
  </svg>
);

export default SvgComponent;
