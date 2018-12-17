import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM11 18.414l-3.707-3.708 1.414-1.413L11 15.586l4.293-4.293 1.414 1.413L11 18.414zM15 7V2l5 5h-5z"
    />
  </svg>
);

export default SvgComponent;
