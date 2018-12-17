import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 14.356V4.59L13.414.004H2c-1.103 0-2 .898-2 2v18c0 1.102.897 2 2 2h12.347A6 6 0 0 1 14 20.008a5.999 5.999 0 0 1 4-5.652zm-5.368-3.09L10 10.389v6.112a2.5 2.5 0 1 1-2-2.45V7.615l5.265 1.754-.633 1.897zM12 6.004v-5l5 5h-5z" />
      <path d="M23.707 17.715l-1.414-1.414L20 18.594l-2.293-2.293-1.414 1.414 2.293 2.293-2.293 2.293 1.414 1.414L20 21.422l2.293 2.293 1.414-1.414-2.293-2.293z" />
    </g>
  </svg>
);

export default SvgComponent;
