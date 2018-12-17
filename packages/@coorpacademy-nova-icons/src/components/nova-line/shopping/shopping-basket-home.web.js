import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3.246 9h13.508l-.445 2h2.049l.444-2H20V7h-3.42L12.868.503l-1.736.992L14.277 7H5.723l3.146-5.505L7.132.503 3.42 7H0v2h1.198l1.825 8.217A1 1 0 0 0 4 18h5v-2H4.803L3.246 9zM19 21.984h-4v-4l-2 2v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3l-2-2v4z" />
      <path d="M17.707 12.277a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L17 14.398l5.293 5.293 1.414-1.414-6-6z" />
    </g>
  </svg>
);

export default SvgComponent;
