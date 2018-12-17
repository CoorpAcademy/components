import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20 7H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-1.887 2L12 12.82 5.887 9h12.226zM4 18v-7.821l7.47 4.669a1.002 1.002 0 0 0 1.06 0l7.47-4.67.001 7.822H4z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
