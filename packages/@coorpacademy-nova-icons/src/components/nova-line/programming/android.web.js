import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M19 10H5a1 1 0 0 0-1 1v7h2v-6h1v6a1 1 0 0 0 1 1h1v3h2v-3h2v3h2v-3h1a1 1 0 0 0 1-1v-6h1v6h2v-7a1 1 0 0 0-1-1zm-4 7H9v-5h6v5zM7 8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.966 4.966 0 0 0-.833-2.753l1.54-1.54-1.414-1.414-1.54 1.54a4.966 4.966 0 0 0-5.506 0l-1.54-1.54-1.414 1.414 1.54 1.54A4.964 4.964 0 0 0 7 8zm5-3c1.304 0 2.416.836 2.829 2H9.171A3.004 3.004 0 0 1 12 5z" />
    </g>
  </svg>
);

export default SvgComponent;
