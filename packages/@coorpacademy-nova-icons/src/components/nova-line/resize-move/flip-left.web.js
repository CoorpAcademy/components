import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .006h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 1.999h-5v2h5v16h-5v2h5a2 2 0 0 0 2-2v-16c0-1.103-.896-2-2-2zM7 1.999h2v2H7zM7 19.999h2v2H7zM2 3.999v1h2v-1h1v-2H4c-1.104 0-2 .897-2 2zM4 18.999H2v1a2 2 0 0 0 2 2h1v-2H4v-1zM2 6.999h2v2H2zM2 14.999h2v2H2zM2 10.999h2v2H2z" />
      <path d="M17 13.999c0-2.205-1.795-4-4-4H9.414l1.293-1.293-1.414-1.414-3.707 3.707 3.707 3.707 1.414-1.414-1.293-1.293H13a2 2 0 0 1 2 2h2zM11 1.999h2v5h-2zM11 14.999h2v7h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
