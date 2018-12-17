import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20 7h-8l-1.447-1.894A2 2 0 0 0 8.764 4H3a1 1 0 0 0-1 1v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-5 5h-3.5a.5.5 0 0 0 0 1h1c1.378 0 2.5 1.122 2.5 2.5 0 1.206-.86 2.217-2 2.449V19h-2v-1H9v-2h3.5a.5.5 0 0 0 0-1h-1A2.503 2.503 0 0 1 9 12.5c0-1.207.86-2.217 2-2.449V9h2v1h2v2z"
    />
  </svg>
);

export default SvgComponent;
