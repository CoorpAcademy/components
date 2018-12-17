import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.963 4.963 0 0 0-.833-2.752l1.54-1.54L12.293.294l-1.54 1.54a4.959 4.959 0 0 0-5.506-.001L3.707.293 2.293 1.708l1.54 1.54A4.963 4.963 0 0 0 3 6zm5-3c1.304 0 2.416.836 2.829 2H5.171A3.006 3.006 0 0 1 8 3zM16 10V9a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v7h2v-6h1v6a1 1 0 0 0 1 1h1v3h2v-3h2v3h2v-3h1a1 1 0 0 0 1-1v-6h3zm-5 5H5v-5h6v5zM23 14.994c0-2.205-1.794-4-4-4s-4 1.795-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .897 2 2h-4c0-1.103.897-2 2-2zm3 9h-6v-5h6v5z" />
      <circle cx={19} cy={19} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
