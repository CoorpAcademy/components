import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h12.348A5.99 5.99 0 0 1 14 20.001c0-.342.035-.674.09-1.001H3l3-4 2 2 4-5 2.452 5.72A6.014 6.014 0 0 1 18 14.349V4.586zM5.5 13A2.498 2.498 0 0 1 3 10.5a2.499 2.499 0 1 1 5 0A2.5 2.5 0 0 1 5.5 13zM12 6V1l5 5h-5zM21 19.001v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
    </g>
  </svg>
);

export default SvgComponent;
