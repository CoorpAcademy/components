import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.966 4.966 0 0 0-.833-2.753l1.54-1.54L12.293.293l-1.54 1.54a4.966 4.966 0 0 0-5.506 0L3.707.293 2.293 1.707l1.54 1.54A4.964 4.964 0 0 0 3 6zm5-3c1.304 0 2.416.836 2.829 2H5.171A3.004 3.004 0 0 1 8 3zM16 10V9a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v7h2v-6h1v6a1 1 0 0 0 1 1h1v3h2v-3h2v3h2v-5H5v-5h11z" />
      <path d="M12 10.994v7c0 3.817 3.797 5.582 5.805 5.981l.195.038.195-.038c2.008-.4 5.805-2.165 5.805-5.981v-7H12zm10 7c0 2.77-3.16 3.759-4 3.974-.84-.214-4-1.204-4-3.974v-5h8v5z" />
      <path d="M17 19.994h2v-2h2v-2h-2v-2h-2v2h-2v2h2z" />
    </g>
  </svg>
);

export default SvgComponent;
