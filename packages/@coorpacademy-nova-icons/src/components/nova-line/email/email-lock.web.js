import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path
      d="M14 15l.002 7H2v-7.057l5.419 3.87a.995.995 0 0 0 1.162 0L12 16.371V12H2c-1.104 0-2 .897-2 2v8c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2v-7h-2zm-2.121-1L8 16.771 4.121 14h7.758zM23 4c0-2.205-1.795-4-4-4s-4 1.795-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-4-2c1.104 0 2 .897 2 2h-4c0-1.103.896-2 2-2zm3 9h-6V6h6v5z"
      fill="currentColor"
    />
    <circle cx={19} cy={8} r={1} fill="currentColor" />
  </svg>
);

export default SvgComponent;
