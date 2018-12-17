import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM13 20h-2v-6h2v6zm-1-8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3-5V2l5 5h-5z"
    />
  </svg>
);

export default SvgComponent;
