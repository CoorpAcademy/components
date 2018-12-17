import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24.001v24.002H0z" />
    <g fill="currentColor">
      <path d="M11.998 1.998c-5.384 0-9 6.206-9 12 0 3.65 1.562 8 9 8s9-4.35 9-8c0-5.795-3.616-12-9-12zm0 18c-4.842 0-7-1.85-7-6 0-4.192 2.433-10 7-10s7 5.808 7 10c0 4.15-2.158 6-7 6z" />
      <path d="M15.998 7.998h-8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm-1 5h-6v-3h6v3z" />
      <circle cx={11.998} cy={17.998} r={1} />
      <circle cx={14.998} cy={16.998} r={1} />
      <circle cx={8.998} cy={16.998} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
