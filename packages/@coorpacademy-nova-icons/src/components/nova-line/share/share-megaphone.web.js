import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20 3v1.197L4 7.754V7H2v8h2v-.754l1 .223V18c0 .459.313.858.757.971l4 1a1 1 0 0 0 1.042-.371l2.471-3.293L20 17.801V19h2V3h-2zM9.598 17.869L7 17.219v-2.307l4.127.918-1.529 2.039zM4 12.197V9.803l16-3.557v9.508L4 12.197z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
