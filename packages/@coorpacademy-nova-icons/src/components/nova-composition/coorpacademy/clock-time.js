import * as React from "react";

const SvgComponent = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm3.1 16.9l-4-4c-.3-.3-.4-.6-.4-.9V5.3h2.7v6.1L17 15l-1.9 1.9z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
