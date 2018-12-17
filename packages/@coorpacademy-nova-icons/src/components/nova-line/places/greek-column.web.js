import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M8 9.999h8v2H8z" />
      <path d="M18 1.999H6a4 4 0 1 0 4 4c0-.732-.211-1.409-.555-2h5.109a3.967 3.967 0 0 0-.554 2 4 4 0 1 0 4-4zm-12 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM8 21.999h2v-7h1v7h2v-7h1v7h2v-9H8z" />
    </g>
  </svg>
);

export default SvgComponent;
