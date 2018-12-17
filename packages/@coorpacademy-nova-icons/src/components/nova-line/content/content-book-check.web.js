import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      d="M12 18.001H6v-16h10v13h2v-14a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h11v-2zm-8 0H2v-16h2v16zM18 23.409l-3.707-3.707 1.414-1.414L18 20.581l4.293-4.293 1.414 1.414z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
