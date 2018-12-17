import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <circle cx={12} cy={4} r={1} fill="currentColor" />
    <path fill="currentColor" d="M15 3h7v2h-7z" />
    <circle cx={12} cy={8} r={1} fill="currentColor" />
    <path fill="currentColor" d="M15 7h7v2h-7z" />
    <circle cx={12} cy={12} r={1} fill="currentColor" />
    <path fill="currentColor" d="M15 11h7v2h-7z" />
    <path
      d="M18 23h-5C6.383 23 1 17.617 1 11V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2.003 2.003 0 0 1-1.908 1.998c.438 2.584 2.367 4.52 4.91 4.924A2.002 2.002 0 0 1 14 15h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2zM3 6v5c0 5.514 4.486 10 10 10h5.002L18 17h-4v1a1 1 0 0 1-1 1c-4.488 0-7.928-3.433-8-7.984A.997.997 0 0 1 6 10h1V6H3z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
