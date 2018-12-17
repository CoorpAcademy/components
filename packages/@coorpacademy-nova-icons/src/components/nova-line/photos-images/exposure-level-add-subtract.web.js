import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 1.999H4c-1.103 0-2 .897-2 2v16c0 1.103.897 1.999 2 1.999h16c1.103 0 2-.896 2-1.999v-16c0-1.103-.897-2-2-2zm-1.414 2L4 18.584V3.999h14.586zm-13.172 16L20 5.413l.001 14.585H5.414z" />
      <path d="M6 5.999h6v2H6zM19 14.999h-2v-2h-2v2h-2v2h2v2h2v-2h2z" />
    </g>
  </svg>
);

export default SvgComponent;
