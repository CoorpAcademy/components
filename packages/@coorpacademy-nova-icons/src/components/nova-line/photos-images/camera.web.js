import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14.5 8.999c-1.93 0-3.5 1.57-3.5 3.5 0 1.931 1.57 3.5 3.5 3.5s3.5-1.569 3.5-3.5c0-1.93-1.57-3.5-3.5-3.5zm0 5a1.501 1.501 0 0 1 0-3 1.501 1.501 0 0 1 0 3z" />
      <path d="M20 5.999h-1v-2h-4v2H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2zm-16 11v-9h16l.001 9H4z" />
      <path d="M6 8.999h4v2H6z" />
    </g>
  </svg>
);

export default SvgComponent;
