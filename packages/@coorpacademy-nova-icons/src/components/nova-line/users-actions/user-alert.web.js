import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M8.002 16.006c-2.206 0-4-1.795-4-4s1.794-4 4-4 4 1.795 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .896-2 2 0 1.103.897 2 2 2s2-.897 2-2c0-1.104-.897-2-2-2zM16.002 24.006h-16v-1c0-3.533 3.29-6 8-6s8 2.467 8 6v1zm-13.841-2h11.683c-.598-1.808-2.833-3-5.841-3s-5.244 1.192-5.842 3zM17.002 3.006h2v6h-2z"
      fill="currentColor"
    />
    <g>
      <circle cx={18.002} cy={11.006} r={1} fill="currentColor" />
    </g>
  </svg>
);

export default SvgComponent;
