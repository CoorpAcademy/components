import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20.707 7.293l-5-5A1.002 1.002 0 0 0 15 2H4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-.293-.707zM6 12h3.5a.5.5 0 0 0 0-1h-1A2.503 2.503 0 0 1 6 8.5c0-1.207.859-2.217 2-2.449V5h2v1h2v2H8.5a.5.5 0 0 0 0 1h1c1.378 0 2.5 1.122 2.5 2.5a2.505 2.505 0 0 1-2 2.45V15H8v-1H6v-2zm12 7H7v-2h11v2zm0-3.998h-4v-2h4v2zm0-4h-4v-2h4v2z"
    />
  </svg>
);

export default SvgComponent;
