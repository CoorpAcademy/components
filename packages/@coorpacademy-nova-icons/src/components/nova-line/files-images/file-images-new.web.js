import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13.137 12.039l-1.242-2.484c-.339-.677-1.45-.677-1.789 0l-2 4A1 1 0 0 0 9 15.002h1.05a3.48 3.48 0 0 1 3.087-2.963z" />
      <circle cx={13.5} cy={15.502} r={2.5} />
      <path d="M16.414 1.001H5c-1.103 0-2 .897-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.587l-4.586-4.586zM5 21.001v-18h10v4h4l.001 14H5z" />
    </g>
  </svg>
);

export default SvgComponent;
