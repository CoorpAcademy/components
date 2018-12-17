import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path
      fill="currentColor"
      d="M20 1.999H4c-1.103 0-2 .898-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-16c0-1.102-.897-2-2-2zm-6 2h2v2h-2v-2zm-6 0h2v7H8v-7zm2 16H8v-2h2v2zm2-4H6v-3h6v3zm4 4h-2v-7h2v7zm2-9h-6v-3h6v3z"
    />
  </svg>
);

export default SvgComponent;
