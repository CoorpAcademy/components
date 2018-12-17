import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11.5 15.5v3c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5zM6.75 15.5H6V17h.75a.75.75 0 0 0 0-1.5z" />
      <path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM6.75 18.5H6V20H4.5v-6h2.25C7.99 14 9 15.009 9 16.25S7.99 18.5 6.75 18.5zM11.5 20H10v-6h1.5c1.655 0 3 1.345 3 3s-1.345 3-3 3zm8.3-4.5h-3.3v1H19V18h-2.5v2H15v-4.5c0-.827.673-1.5 1.5-1.5h3.3v1.5zM15 7V2l5 5h-5z" />
    </g>
  </svg>
);

export default SvgComponent;
