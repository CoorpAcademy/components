import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <path
      d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM8 5.083a7.933 7.933 0 0 1 3-1.013V10h3v3.5l-2.49 1.867L9.721 10H8V5.083zM12 20c-4.411 0-8-3.589-8-8 0-2.021.759-3.864 2-5.274V12h2.279l2.211 6.633L16 14.5V8h-3V4.069c3.94.495 7 3.859 7 7.931 0 4.411-3.589 8-8 8z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
