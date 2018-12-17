import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 3.004h10v4h4v1h2V5.59l-4.586-4.586H5c-1.103 0-2 .898-2 2v5h2v-5zM19 21.004H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM19.942 10.004l-.957 3.901L18 10.004h-2l1.963 8h2.058L20 17.923l2-7.919zM4 14.307l.168.252c.371.557 1.293.557 1.664 0L6 14.307v3.697h2v-7a1.002 1.002 0 0 0-1.832-.555L5 12.202 3.832 10.45A1 1 0 1 0 2 11.004v7h2v-3.697zM15 18.004v-2h1v-2h-1v-3a1 1 0 0 0-1-1h-3a1 1 0 0 0-.97.758l-1 4a1 1 0 0 0 .97 1.242h3v2h2zm-3.719-4l.5-2H13v2h-1.719z" />
    </g>
  </svg>
);

export default SvgComponent;
