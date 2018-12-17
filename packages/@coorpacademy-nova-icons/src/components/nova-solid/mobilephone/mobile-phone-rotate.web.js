import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path
      fill="currentColor"
      d="M10.836 3.127a2 2 0 0 0-2.828 0l-4.949 4.95a2 2 0 0 0-.002 2.827l10.608 10.607a2 2 0 0 0 2.828-.001l4.949-4.948a2 2 0 0 0 0-2.828L10.836 3.127zm7.812 10.641l-4.949 4.949-9.193-9.192 4.951-4.948 9.191 9.191zM21.75 6v-.404A4.756 4.756 0 0 0 17 .846h-1v1.5h1a3.254 3.254 0 0 1 3.25 3.25V6H18l3 4 3-4h-2.25zM7 21.654a3.254 3.254 0 0 1-3.25-3.25V18H6l-3-4-3 4h2.25v.404A4.756 4.756 0 0 0 7 23.154h1v-1.5H7z"
    />
  </svg>
);

export default SvgComponent;
