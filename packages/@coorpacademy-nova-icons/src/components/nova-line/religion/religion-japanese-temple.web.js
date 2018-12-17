import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.002H0z" />
    <path
      d="M19 7c.334 0 .646-.167.832-.445l2-3A.998.998 0 0 0 21 2H3a1 1 0 0 0-.832 1.554l2 3A1 1 0 0 0 5 7h1v2H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h2v9h2v-9h8v9h2v-9h2a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2V7h1zM4.869 4h14.263l-.667 1H5.535l-.666-1zM8 7h3v2H8V7zm11 5H5v-1h14v1zm-3-3h-3V7h3v2z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
