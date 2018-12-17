import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M8.002 16.006c-2.205 0-4-1.795-4-4s1.795-4 4-4 4 1.795 4 4-1.794 4-4 4zm0-6a2 2 0 1 0 .001 4.001 2 2 0 0 0-.001-4.001zM16.002 24.006h-16v-1c0-3.533 3.289-6 8-6s8 2.467 8 6v1zm-13.841-2h11.684c-.599-1.808-2.834-3-5.842-3s-5.244 1.192-5.842 3z"
      fill="currentColor"
    />
    <g>
      <path fill="currentColor" d="M15.002 7h6v2h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
