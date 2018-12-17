import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 10h6v2h2V9a.98.98 0 0 0-.231-.615l.012-.009L16 3.65V1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2.65L.219 8.376A1.049 1.049 0 0 0 0 9v10a1 1 0 0 0 1 1h13v-2h-2v-8zm4.919-2H13.08L15 5.602 16.919 8zM6 2h8v1H6V2zm-.52 3h7.439l-2.4 3H3.081L5.48 5zM2 10h8v8H2v-8z" />
      <path d="M3 11h6v4H3zM24 15.414L22.586 14 21 15.586V14h-2v3.586l-1 1V17h-2v3.586l-1.707 1.707 1.414 1.414L17.414 22H21v-2h-1.586l1-1H24v-2h-1.586z" />
    </g>
  </svg>
);

export default SvgComponent;
