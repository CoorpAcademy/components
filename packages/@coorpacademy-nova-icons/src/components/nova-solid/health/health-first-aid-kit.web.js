import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <path
      fill="currentColor"
      d="M20 7h-4V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H4c-1.103 0-2 .898-2 2v10c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2V9c0-1.102-.896-2-2-2zM10 5h4v2h-4V5zm6 10h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z"
    />
  </svg>
);

export default SvgComponent;
