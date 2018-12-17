import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM9.375 10.75h-3.5v3.5h1.75v-.875H6.75v-1.75h2.625v2.625c0 .965-.785 1.75-1.75 1.75h-1.75c-.965 0-1.75-.785-1.75-1.75v-3.5c0-.965.785-1.75 1.75-1.75h3.5v1.75zm4.375 0h-.875v3.5h.875V16h-3.5v-1.75h.875v-3.5h-.875V9h3.5v1.75zm6.125 0h-3.5v.875H19v1.75h-2.625V16h-1.75v-5.25c0-.965.785-1.75 1.75-1.75h3.5v1.75z"
    />
  </svg>
);

export default SvgComponent;
