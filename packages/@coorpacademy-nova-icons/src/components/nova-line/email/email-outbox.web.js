import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 11H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2zm-1.887 2L12 16.82 5.887 13h12.226zM4 22v-7.821l7.47 4.669a1.002 1.002 0 0 0 1.06 0l7.47-4.67.001 7.822H4zM11 4.414V9h2V4.414l2.293 2.293 1.414-1.415L12 .585 7.293 5.292l1.414 1.415z" />
    </g>
  </svg>
);

export default SvgComponent;
