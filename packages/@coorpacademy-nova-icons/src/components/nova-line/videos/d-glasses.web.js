import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M21 4h-3v2h3v6H3V6h3V4H3c-1.103 0-2 .896-2 2v13c0 1.103.897 2 2 2h6c.4 0 .762-.238.919-.606L12 15.54l2.081 4.854A.999.999 0 0 0 15 21h6c1.103 0 2-.897 2-2V6c0-1.104-.897-2-2-2zM8.341 19H3v-5h7.483l-2.142 5zm7.318 0l-2.143-5H21v5h-5.341z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
