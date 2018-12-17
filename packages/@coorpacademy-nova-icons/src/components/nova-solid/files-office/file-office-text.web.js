import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM17 14h-2v-2h-2v6h2v2H9v-2h2v-6H9v2H7v-4h10v4zm-2-7V2l5 5h-5z"
    />
  </svg>
);

export default SvgComponent;
