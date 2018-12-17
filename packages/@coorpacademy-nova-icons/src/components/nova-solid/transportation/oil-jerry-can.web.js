import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <path
      fill="currentColor"
      d="M2.136 7.743L5.378 4.5l2.121 2.12-3.242 3.243zM20 2h-6a2 2 0 0 0-2 2v3H9l-5 5v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-1.293 16.293l-1.414 1.413L14 16.414l-3.293 3.292-1.414-1.413L12.586 15l-3.293-3.293 1.414-1.413L14 13.586l3.293-3.293 1.414 1.413L15.414 15l3.293 3.293zM20 6h-6V4h6v2z"
    />
  </svg>
);

export default SvgComponent;
