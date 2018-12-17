import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M21 3.003h-3c-1.103 0-2 .897-2 2v4H8v-4c0-1.104-.897-2-2-2H3c-1.103 0-2 .897-2 2v15c0 1.102.897 2 2 2h18c1.103 0 2-.898 2-2v-15c0-1.104-.897-2-2-2zm-15.003 17H3v-9h2.999l-.002 9zm-1.497-12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7.5 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm8.997 1H18v-9h2.999l-.002 9zm-1.497-12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
    />
  </svg>
);

export default SvgComponent;
