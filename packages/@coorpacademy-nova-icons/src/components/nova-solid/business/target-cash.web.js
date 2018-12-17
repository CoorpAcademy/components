import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20.941 11A9 9 0 0 0 13 3.059V0h-2v3.059A8.998 8.998 0 0 0 3.059 11H0v2h3.059A8.998 8.998 0 0 0 11 20.942V24h2v-3.058A8.998 8.998 0 0 0 20.941 13H24v-2h-3.059zM15 10h-3.5a.5.5 0 0 0 0 1h1c1.379 0 2.5 1.122 2.5 2.5 0 1.208-.86 2.218-2 2.45V17h-2v-1H9v-2h3.5a.5.5 0 0 0 0-1h-1A2.503 2.503 0 0 1 9 10.5c0-1.207.86-2.217 2-2.449V7h2v1h2v2z"
    />
  </svg>
);

export default SvgComponent;
