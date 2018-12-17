import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0h24v24.001h-24z" />
    <path
      fill="currentColor"
      d="M12 2C8.024 2 4 3.374 4 6v12c0 2.626 4.024 4 8 4s8-1.374 8-4V6c0-2.626-4.024-4-8-4zm0 2c3.723 0 6 1.295 6 2s-2.277 2-6 2-6-1.295-6-2 2.277-2 6-2zm4 13s-2 1-4 1-4-1-4-1v-5s2 1 4 1 4-1 4-1v5z"
    />
  </svg>
);

export default SvgComponent;
