import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <path
      fill="currentColor"
      d="M19 2H7a2 2 0 0 0-2 2v1h2v1H3v2h2v3h2v1H3v2h2v3h2v1H3v2h2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-2 8v5h-2v-3h-2v3h-2v-5H9l5-4 5 4h-2z"
    />
  </svg>
);

export default SvgComponent;
