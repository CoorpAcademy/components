import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 12.007H8v6h5v-2.25l3 2.25v-6l-3 2.25z" />
      <path d="M16.414 1.004H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.59l-4.586-4.586zM5 21.004v-18h10v4h4l.001 14H5z" />
    </g>
  </svg>
);

export default SvgComponent;
