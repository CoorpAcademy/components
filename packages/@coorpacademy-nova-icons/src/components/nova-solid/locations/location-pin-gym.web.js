import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <path
      fill="currentColor"
      d="M12 2a8 8 0 0 0-8 8c0 4.418 8 12 8 12s8-7.582 8-12a8 8 0 0 0-8-8zm5 9h-1v2h-2v-2h-4v2H8v-2H7V9h1V7h2v2h4V7h2v2h1v2z"
    />
  </svg>
);

export default SvgComponent;
