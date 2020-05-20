import * as React from "react";

const SvgComponent = (props) => (
  <svg viewBox="0 0 30 30" {...props}>
    <path
      d="M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15S23.3 0 15 0zM7.7 23.1c-.2.1-.5.1-.7-.1-.2-.2-.2-.4-.1-.7L11.1 12l6.8 6.8-10.2 4.3zM23.1 7.7L18.9 18 12 11.1l10.2-4.2c.2-.1.5 0 .7.1.2.2.3.5.2.7z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
