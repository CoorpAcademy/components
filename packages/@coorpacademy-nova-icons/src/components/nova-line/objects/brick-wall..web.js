import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0H24v24.001H-.001z" />
    <path
      d="M21 13h-2v-3a1 1 0 0 0-1-1h-2V6a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H6a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-4 0h-4v-2h4v2zm-7-6h4v2h-4V7zm-3 4h4v2H7v-2zm-3 4h4v2H4v-2zm6 0h4v2h-4v-2zm10 2h-4v-2h4v2z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
