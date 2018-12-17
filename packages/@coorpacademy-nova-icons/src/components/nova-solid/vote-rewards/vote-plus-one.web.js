import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M18 3H6C4.346 3 3 4.346 3 6v13c0 1.103.897 2 2 2h14c1.104 0 2-.897 2-2V6c0-1.654-1.346-3-3-3zm-8 2h4v2h-4V5zM5 6c0-.552.449-1 1-1h2v2H5V6zm7 9h-2v2H8v-2H6v-2h2v-2h2v2h2v2zm5 3h-2v-5.382l-1.447.724-.894-1.789 2.894-1.447A.998.998 0 0 1 17 11v7zm2-11h-3V5h2c.551 0 1 .448 1 1v1z"
    />
  </svg>
);

export default SvgComponent;
