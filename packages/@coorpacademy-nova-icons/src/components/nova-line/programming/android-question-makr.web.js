import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.966 4.966 0 0 0-.833-2.753l1.54-1.54L12.293.293l-1.54 1.54a4.964 4.964 0 0 0-5.506 0L3.707.293 2.293 1.707l1.54 1.54A4.972 4.972 0 0 0 3 6zm5-3c1.304 0 2.416.836 2.829 2H5.172A3.002 3.002 0 0 1 8 3zM16 9a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v7h2v-6h1v6a1 1 0 0 0 1 1h1v3h2v-3h2v3h2v-3h1a1 1 0 0 0 1-1v-6l3-.006V9zm-5 6H5v-5h6v5zM20 11.994c-2.205 0-4 1.794-4 4h2c0-1.103.897-2 2-2 1.104 0 2 .897 2 2s-.896 2-2 2h-1v3h2v-1.126a4.006 4.006 0 0 0 3-3.874c0-2.206-1.794-4-4-4z" />
      <circle cx={20} cy={23} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
