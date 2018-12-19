import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11.764 4.152a2.017 2.017 0 0 0-2.178.434L6.479 9H4c-1.103 0-2 .898-2 2v4c0 1.103.897 2 2 2h2.479l2.995 4.28c.416.496.959.72 1.526.72a1.993 1.993 0 0 0 2-2V6c0-.813-.485-1.538-1.236-1.848zM7.521 15H4v-4h3.521L11 6.027l.001 13.948L7.521 15zM23 12h-3V9h-2v3h-3v2h3v3h2v-3h3z" />
    </g>
  </svg>
);

export default SvgComponent;
