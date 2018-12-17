import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path d="M18 22H3a1 1 0 0 1-1-1V6h2v14h14v2z" fill="currentColor" />
    <path
      d="M21 18H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM8 16h12V4H8v12z"
      fill="currentColor"
    />
    <path
      fill="currentColor"
      d="M10 13h8v2h-8zM19.061 6L18 4.94l-2.398 2.398C15.11 7.123 14.57 7 14 7s-1.11.123-1.602.338L10 4.94 8.939 6l2.205 2.205A3.986 3.986 0 0 0 10 11v1h8v-1a3.98 3.98 0 0 0-1.145-2.795L19.061 6zM12.5 10.25a.75.75 0 0 1 0-1.5.75.75 0 0 1 0 1.5zm3 0a.75.75 0 0 1 0-1.5.75.75 0 0 1 0 1.5z"
    />
  </svg>
);

export default SvgComponent;
