import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21.553 13.106L17 15.382v-2.763l5.447-2.725-.895-1.789L17 10.382V6.333L4.385 1.077l-.77 1.846L11 6H2v16h2v-2h11v2h2v-4.381l5.447-2.725-.894-1.788zM4 8h11v10H4V8z" />
      <path d="M7 10h5v2H7zM7 14h5v2H7z" />
    </g>
  </svg>
);

export default SvgComponent;
