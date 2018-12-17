import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M12 1.719l-10.625 8.5 1.25 1.562L12 4.281l9.375 7.5 1.25-1.562z" />
      <path d="M7 11l-3 6v4h2v.5a1.5 1.5 0 1 0 3 0V21h6v.5a1.5 1.5 0 1 0 3 0V21h2v-4l-3.001-6H7zm2 8H6v-2h3v2zm9 0h-3v-2h3v2zM7 15l1-2h8l1 2H7z" />
    </g>
  </svg>
);

export default SvgComponent;
