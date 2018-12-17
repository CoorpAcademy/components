import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M16.414 1H5c-1.103 0-2 .898-2 2v18.001c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM18 20H6V9h2v5.586l2.293-2.293a.999.999 0 0 1 1.414 0L14 14.586l2.293-2.293 1.414 1.413-3 3a.999.999 0 0 1-1.414 0L11 14.414l-3 3V18h10v2zM15 7V2l5 5h-5z"
    />
  </svg>
);

export default SvgComponent;
