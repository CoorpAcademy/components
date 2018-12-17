import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M22 7V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v10H2v2h9v2h2v-2h9v-2h-1V8a1 1 0 0 0 1-1zm-11.293 8.293l-1.414 1.413L5.586 13l3.707-3.707 1.414 1.413L8.414 13l2.293 2.293zm4 1.413l-1.414-1.413L15.586 13l-2.293-2.293 1.414-1.413L18.414 13l-3.707 3.706zM20 6H4V5h16v1z"
    />
  </svg>
);

export default SvgComponent;
