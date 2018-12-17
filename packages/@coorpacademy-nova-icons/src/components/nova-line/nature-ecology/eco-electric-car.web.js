import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24V24H0z" />
    <g fill="currentColor">
      <path d="M9 3h2v2H9zM13 3h2v2h-2zM22 15.764L18.618 9H16v2h1.382l2 4H4.618l2-4H8V9H5.382L2 15.764V21h2v.5c0 .827.673 1.5 1.5 1.5S7 22.327 7 21.5V21h10v.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5V21h2v-5.236zM15 17v2H9v-2h6zM4 17h3v2H4v-2zm13 2v-2h3v2h-3z" />
      <path d="M11 10v3h2v-3c1.103 0 2-.897 2-2V6H9v2c0 1.103.897 2 2 2z" />
    </g>
  </svg>
);

export default SvgComponent;
