import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 19.001H4v-14h12v3h2v-4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v-3z" />
      <path d="M22 12.001a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-8zm-2 7h-4v-7h4v7z" />
    </g>
  </svg>
);

export default SvgComponent;
