import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22.707 2.707l-1.414-1.413L17 5.586V2h-2v7h7V7h-3.586zM2 11h2v2H2zM5 11h2v2H5zM8 11h2v2H8zM11 11h2v2h-2zM11 14h2v2h-2zM2 14h2v2H2zM2 17h2v2H2zM2 20h2v2H2zM5 20h2v2H5zM8 20h2v2H8zM11 20h2v2h-2zM11 17h2v2h-2zM6 4v5h2V4h5V2H8c-1.103 0-2 .898-2 2zM20 16h-5v2h5c1.103 0 2-.897 2-2v-5h-2v5z" />
    </g>
  </svg>
);

export default SvgComponent;
