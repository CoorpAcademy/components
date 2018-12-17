import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M15 8H1a1 1 0 0 0-1 1v7h2v-6h1v6a1 1 0 0 0 1 1h1v3h2v-3h2v3h2v-3h1a1 1 0 0 0 1-1v-6h1v6h2V9a1 1 0 0 0-1-1zm-4 7H5v-5h6v5zM3 6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.966 4.966 0 0 0-.833-2.753l1.54-1.54L12.293.293l-1.54 1.54a4.964 4.964 0 0 0-5.506 0L3.707.293 2.293 1.707l1.54 1.54A4.972 4.972 0 0 0 3 6zm5-3c1.304 0 2.416.836 2.829 2H5.172A3.002 3.002 0 0 1 8 3zM17 18.994h6v2h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
