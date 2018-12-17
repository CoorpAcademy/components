import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M19 8.003h-.08c-.487-3.387-3.4-6-6.92-6s-6.433 2.613-6.92 6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v-5c0-2.757 2.243-5 5-5s5 2.243 5 5v5h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z" />
      <path d="M16 10.003c0-2.206-1.794-4-4-4s-4 1.794-4 4c0 2.205 1.794 4 4 4s4-1.795 4-4zM12 15.003c-4.71 0-8 2.467-8 6v1h16v-1c0-3.533-3.29-6-8-6z" />
    </g>
  </svg>
);

export default SvgComponent;
