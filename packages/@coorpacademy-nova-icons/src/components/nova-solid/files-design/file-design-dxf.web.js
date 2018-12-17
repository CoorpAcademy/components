import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M6.5 15.5v3a1.5 1.5 0 0 0 0-3z" />
      <path d="M16.414 1H5c-1.103 0-2 .897-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.586L16.414 1zM6.5 20H5v-6h1.5c1.654 0 3 1.347 3 3 0 1.655-1.346 3-3 3zm7.5 0h-1.688l-.562-1.198L11.188 20H9.5l1.406-3L9.5 14h1.688l.562 1.201.562-1.201H14l-1.406 3L14 20zm5.25-4.5h-3v.75h2.25v1.5h-2.25V20h-1.5v-4.5c0-.826.673-1.5 1.5-1.5h3v1.5zM15 7V2l5 5h-5z" />
    </g>
  </svg>
);

export default SvgComponent;
