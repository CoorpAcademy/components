import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001-.001h24v24.002h-24z" />
    <path
      fill="currentColor"
      d="M20 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM4 4h8v10H4V4zm2 16a2 2 0 1 1 .001-4.001A2 2 0 0 1 6 20zm6 0a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 20zm6 0a2 2 0 1 1 .001-4.001A2 2 0 0 1 18 20zm-2-6V9h2v5h-2zm2-6h-2l-2-2.5c0-2 6-2 6 0L18 8z"
    />
  </svg>
);

export default SvgComponent;
