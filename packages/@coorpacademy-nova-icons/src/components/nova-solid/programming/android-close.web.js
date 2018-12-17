import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M15 8H1c-.552 0-1 .449-1 1v7h2v-6h1v6a1 1 0 0 0 1 1h1v3h2v-3h2v3h2v-3h1a1 1 0 0 0 1-1v-6h1v6h2V9a1 1 0 0 0-1-1zM3 6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.96 4.96 0 0 0-.833-2.752l1.54-1.54L12.293.294l-1.54 1.54a4.956 4.956 0 0 0-5.505 0L3.708.294 2.293 1.707l1.54 1.54A4.974 4.974 0 0 0 3 6zM23.708 17.704l-1.414-1.414L20 18.583l-2.292-2.293-1.414 1.414 2.292 2.294-2.292 2.292 1.414 1.414L20 21.411l2.294 2.293 1.414-1.414-2.293-2.292z" />
    </g>
  </svg>
);

export default SvgComponent;
