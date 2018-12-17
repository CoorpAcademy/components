import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21.293 14.293L19 16.586V11h-2v5.586l-2.293-2.293-1.414 1.414L18 20.414l4.707-4.707zM17 8h2v2h-2zM17 5h2v2h-2zM2 2h9v9H2zM2 22h9v-9H2v9zm2-7h5v5H4v-5z" />
    </g>
  </svg>
);

export default SvgComponent;
