import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path
      fill="currentColor"
      d="M21 3h-2V1h-2v5h-1V3H8V1H6v5H5V3H3c-1.103 0-2 .898-2 2v15c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V5c0-1.102-.897-2-2-2zm-6 13.854l-1.658.829a3.003 3.003 0 0 1-2.684 0L9 16.854v-2l3 1.5 3-1.5v2zm2.75-4.375v4.875h-1.5v-4.125L12 15.354l-6-3 6-3 6 3-.25.125z"
    />
  </svg>
);

export default SvgComponent;
