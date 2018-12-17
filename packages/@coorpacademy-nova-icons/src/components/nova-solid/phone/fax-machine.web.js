import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M21 5h-2V3h-6v2h-2V1h10zM22 7h-3v2h-6V7H9v14h2v-4h10v4h1a2 2 0 0 0 2-2V9c0-1.103-.896-2-2-2zm-9 7a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM7.001 4.278V1h-2v3H2C.897 4 0 4.897 0 6v15a2 2 0 0 0 2 2h4c1.103 0 2-.896 2-2V6c0-.737-.405-1.375-.999-1.722z"
    />
    <path fill="currentColor" d="M12 18h8v5h-8z" />
  </svg>
);

export default SvgComponent;
