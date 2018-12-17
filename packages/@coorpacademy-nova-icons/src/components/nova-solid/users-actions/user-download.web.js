import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20.295 3.298l-2.293 2.293V.005h-2v5.586L13.71 3.298l-1.415 1.414 4.707 4.707 4.707-4.707z"
    />
    <g fill="currentColor">
      <path d="M8.002 16.006c2.206 0 4-1.795 4-4s-1.794-4-4-4-4 1.795-4 4 1.795 4 4 4zM8.002 17.006c-4.71 0-8 2.467-8 6v1h16v-1c0-3.533-3.289-6-8-6z" />
    </g>
  </svg>
);

export default SvgComponent;
