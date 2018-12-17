import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 10.75h-.875v1.75H12a.874.874 0 1 0 0-1.75z" />
      <path d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM8.5 13.375A2.628 2.628 0 0 1 5.875 16a2.628 2.628 0 0 1-2.625-2.625H5a.875.875 0 0 0 1.75 0V9H8.5v4.375zm3.5.875h-.875V16h-1.75V9H12a2.629 2.629 0 0 1 2.625 2.625A2.628 2.628 0 0 1 12 14.25zm8.75-3.5h-3.5v3.5H19v-.875h-.875v-1.75h2.625v2.625c0 .965-.785 1.75-1.75 1.75h-1.75c-.965 0-1.75-.785-1.75-1.75v-3.5c0-.965.785-1.75 1.75-1.75h3.5v1.75z" />
    </g>
  </svg>
);

export default SvgComponent;
