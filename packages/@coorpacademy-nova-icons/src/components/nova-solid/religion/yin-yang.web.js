import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.002H0z" />
    <g fill="currentColor">
      <path d="M22 12c0-5.522-4.48-10-10-10C6.617 2 2 6.383 2 12c0 5.515 4.486 10 10 10 5.673 0 10-4.67 10-10zm-7.5 2.5a2 2 0 1 1 .001 3.999A2 2 0 0 1 14.5 14.5zM4 12c0-3.627 2.428-6.692 5.742-7.67C11.64 5.04 13 6.856 13 9a5 5 0 0 1-1.01 3.01C11.233 13.01 10 13.5 10 16c0 1.642.804 3.087 2.027 3.999L12 20c-4.411 0-8-3.589-8-8z" />
      <circle cx={9.5} cy={8.5} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
