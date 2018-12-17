import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M8.002 16.006c-2.205 0-4-1.795-4-4s1.795-4 4-4 4 1.795 4 4-1.794 4-4 4zm0-6a2 2 0 1 0 .001 4.001 2 2 0 0 0-.001-4.001zM16.002 24.006h-16v-1c0-3.533 3.289-6 8-6s8 2.467 8 6v1zm-13.841-2h11.684c-.599-1.808-2.834-3-5.842-3s-5.244 1.192-5.842 3zM23.002 4.006c0-2.205-1.795-4-4-4s-4 1.795-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4-2a2 2 0 0 1 2 2h-4c0-1.104.897-2 2-2zm3 9h-6v-5h6v5z"
      fill="currentColor"
    />
    <circle cx={19.002} cy={8.006} r={1} fill="currentColor" />
  </svg>
);

export default SvgComponent;
