import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M21 4.003h-3v2h3v6H3v-6h3v-2H3c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h6c.4 0 .762-.238.919-.606L12 15.542l2.081 4.854a.997.997 0 0 0 .919.606h6c1.103 0 2-.897 2-2v-13a2.001 2.001 0 0 0-2-1.999z"
    />
  </svg>
);

export default SvgComponent;
